"use client";

import { useState, useTransition } from "react";
import BookingDateInput from "./BookingDateInput";

const initialMessage = {
  type: "idle",
  text: "",
};

export default function BookingForm() {
  const [message, setMessage] = useState(initialMessage);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setMessage(initialMessage);

    startTransition(async () => {
      try {
        const response = await fetch("/api/appointments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (!response.ok) {
          setMessage({
            type: "error",
            text: data.message ?? "预约提交失败，请稍后再试。",
          });
          return;
        }

        form.reset();
        setMessage({
          type: "success",
          text: data.message ?? "预约已提交，门店会尽快联系你确认。",
        });
      } catch {
        setMessage({
          type: "error",
          text: "网络暂时不可用，请稍后再试。",
        });
      }
    });
  }

  return (
    <form
      className="grid grid-cols-2 gap-3.5 rounded-lg border border-white/20 bg-white/10 p-6 max-[560px]:grid-cols-1 max-[560px]:p-[18px]"
      onSubmit={handleSubmit}
    >
      <Field label="主人姓名">
        <input type="text" name="name" placeholder="例如：王女士" required />
      </Field>
      <Field label="联系电话">
        <input type="tel" name="phone" placeholder="请输入手机号" required />
      </Field>
      <Field label="宠物类型">
        <select name="pet" defaultValue="小型犬" required>
          <option>小型犬</option>
          <option>中大型犬</option>
          <option>短毛猫</option>
          <option>长毛猫</option>
        </select>
      </Field>
      <Field label="预约项目">
        <select name="service" defaultValue="基础洁净洗护" required>
          <option>基础洁净洗护</option>
          <option>猫咪低压护理</option>
          <option>精修造型</option>
          <option>SPA 护理</option>
        </select>
      </Field>
      <Field label="到店日期">
        <BookingDateInput />
      </Field>
      <Field label="偏好时段">
        <select name="time" defaultValue="早餐 09:30" required>
          <option>早餐 09:30</option>
          <option>上午 10:00 - 12:00</option>
          <option>下午 13:00 - 16:00</option>
          <option>傍晚 16:00 - 18:30</option>
        </select>
      </Field>
      <Field label="备注" wide>
        <textarea
          name="note"
          placeholder="例如：胆小、怕吹风、最近有皮肤问题等"
        />
      </Field>
      <button
        className="col-span-full inline-flex min-h-11 items-center justify-center rounded-lg bg-gold px-[18px] font-bold text-ink shadow-[0_12px_30px_rgba(23,32,29,.16)] disabled:cursor-not-allowed disabled:opacity-70"
        disabled={isPending}
        type="submit"
      >
        {isPending ? "提交中..." : "提交"}
      </button>
      {message.text ? (
        <p
          className={`col-span-full m-0 rounded-lg border px-3 py-2 text-sm font-bold ${
            message.type === "success"
              ? "border-[#a7e2c5] bg-[#e8fff2] text-[#0f5b39]"
              : "border-[#ffc5b9] bg-[#fff0ed] text-[#9a4134]"
          }`}
          role="status"
        >
          {message.text}
        </p>
      ) : null}
    </form>
  );
}

function Field({ label, children, wide = false }) {
  return (
    <label
      className={`booking-field grid gap-[7px] text-sm font-bold text-white/80 ${
        wide ? "col-span-full" : ""
      }`}
    >
      {label}
      <span className="contents">{children}</span>
    </label>
  );
}
