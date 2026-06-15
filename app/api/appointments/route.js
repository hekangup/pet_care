import { NextResponse } from "next/server";
import { getPool } from "../../db";

export const runtime = "nodejs";

const allowedPetTypes = new Set(["小型犬", "中大型犬", "短毛猫", "长毛猫"]);
const allowedServices = new Set(["基础洁净洗护", "猫咪低压护理", "精修造型", "SPA 护理"]);
const allowedTimes = new Set([
  "早餐 09:30",
  "上午 10:00 - 12:00",
  "下午 13:00 - 16:00",
  "傍晚 16:00 - 18:30",
]);

function cleanText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value;
}

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "提交内容格式不正确。" }, { status: 400 });
  }

  const ownerName = cleanText(payload.name);
  const phone = cleanText(payload.phone);
  const petType = cleanText(payload.pet);
  const serviceName = cleanText(payload.service);
  const visitDate = cleanText(payload.date);
  const preferredTime = cleanText(payload.time);
  const note = cleanText(payload.note);

  if (!ownerName || ownerName.length > 60) {
    return NextResponse.json({ message: "请填写主人姓名。" }, { status: 400 });
  }

  if (!phone || phone.length < 6 || phone.length > 30) {
    return NextResponse.json({ message: "请填写有效联系电话。" }, { status: 400 });
  }

  if (!allowedPetTypes.has(petType)) {
    return NextResponse.json({ message: "请选择宠物类型。" }, { status: 400 });
  }

  if (!allowedServices.has(serviceName)) {
    return NextResponse.json({ message: "请选择预约项目。" }, { status: 400 });
  }

  if (!isValidDate(visitDate)) {
    return NextResponse.json({ message: "请选择到店日期。" }, { status: 400 });
  }

  if (!allowedTimes.has(preferredTime)) {
    return NextResponse.json({ message: "请选择偏好时段。" }, { status: 400 });
  }

  try {
    const result = await getPool().query(
      `insert into public.appointments (
        owner_name,
        phone,
        pet_type,
        service_name,
        visit_date,
        preferred_time,
        note
      )
      values ($1, $2, $3, $4, $5, $6, nullif($7, ''))
      returning id, status, created_at`,
      [ownerName, phone, petType, serviceName, visitDate, preferredTime, note],
    );

    return NextResponse.json(
      {
        message: "预约已提交，门店会尽快联系你确认。",
        appointment: result.rows[0],
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Failed to create appointment", error);
    return NextResponse.json({ message: "预约提交失败，请稍后再试。" }, { status: 500 });
  }
}
