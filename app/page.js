"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import BookingForm from "./BookingForm";

const content = {
  zh: {
    langName: "中文",
    nextLang: "EN",
    brand: "毛孩子浴所",
    logoText: "爪",
    homeAria: "毛孩子浴所首页",
    navAria: "页面导航",
    nav: ["洗护服务", "护理流程", "套餐价格", "到店信息"],
    bookingCta: "预约洗护",
    heroAria: "宠物洗护店首屏",
    heroSlides: [
      {
        src: "/assets/store-reception.png",
        alt: "高端宠物洗护店的接待前厅、等候区和产品陈列",
      },
      {
        src: "/assets/store-wash-area.png",
        alt: "高端宠物洗护店透明玻璃洗护区和专业护理工位",
      },
      {
        src: "/assets/store-cat-room.png",
        alt: "高端宠物洗护店猫咪低压护理房和安静烘干区",
      },
    ],
    heroEyebrow: "低压安抚洗护 · 猫狗分区护理",
    heroTitle: "专业宠物洗护，让毛孩子干净又放松",
    heroCopy:
      "从皮毛评估、耳眼清洁到吹干造型，我们用透明流程和温和产品，让宠物干净、放松，也让主人放心。",
    heroPrimary: "立即预约",
    heroSecondary: "查看价格",
    highlightsAria: "门店亮点",
    highlights: [
      ["45-90 分钟", "按体型和毛量安排时长"],
      ["可视化洗护", "护理节点照片同步"],
      ["猫狗分区", "降低气味与噪音压力"],
      ["同城接送", "3 公里内可预约"],
    ],
    serviceHead: {
      title: "按宠物状态定制洗护",
      copy: "不只洗干净，更关注皮肤、毛结、情绪和季节性护理需求。首次到店会先做基础评估。",
    },
    services: [
      {
        title: "基础洁净洗护",
        copy: "适合日常清洁，包含洗澡、吹干、梳毛、耳眼护理、足底毛修剪和指甲打磨。",
        tags: ["日常必选", "温和沐浴"],
        pet: "dog",
      },
      {
        title: "精修造型",
        copy: "根据品种、脸型和生活习惯设计造型，兼顾好看、好打理和夏季散热。",
        tags: ["泰迪比熊", "造型设计"],
        pet: "dog",
      },
      {
        title: "猫咪低压护理",
        copy: "独立猫房、低噪吹风和双人安抚操作，减少应激，适合长毛猫、换毛期和轻微毛结。",
        tags: ["猫咪友好", "低噪环境"],
        pet: "cat",
      },
    ],
    processHead: "四步完成一次安心护理",
    processVisual: {
      aria: "宠物洗护流程示意图",
      record: "护理记录",
      checks: ["皮毛评估", "耳眼清洁", "吹干梳理"],
      tools: ["梳子", "指甲剪", "低温吹风"],
    },
    steps: [
      ["01", "到店评估", "记录体重、皮肤状态、毛结位置和宠物性格，确认是否适合当日洗护。"],
      ["02", "分区清洁", "使用宠物专用沐浴产品，敏感皮肤会调整水温、揉洗力度和停留时间。"],
      ["03", "吹干梳理", "先吸水再低温吹干，边吹边梳开浮毛，降低潮湿引发的皮肤问题。"],
      ["04", "交付反馈", "交付护理照片、异常提醒和居家梳毛建议，方便主人持续照护。"],
    ],
    pricingHead: {
      title: "清晰价格，不临时加项",
      copy: "价格按体型、毛量和毛结程度确认。严重打结、攻击行为或皮肤异常会先沟通再处理。",
    },
    priceSuffix: "起",
    prices: [
      {
        title: "小型犬基础洗护",
        subtitle: "约 6kg 以下",
        price: "¥88",
        items: ["双遍沐浴与护毛", "耳眼清洁、指甲打磨", "足底毛与肛周基础修剪"],
      },
      {
        title: "猫咪低压洗护",
        subtitle: "短毛猫 / 长毛猫分价",
        price: "¥168",
        items: ["独立猫房预约时段", "低噪吹干与安抚操作", "换毛期浮毛梳理"],
      },
      {
        title: "精修造型套餐",
        subtitle: "按品种与造型难度确认",
        price: "¥198",
        items: ["基础洗护全包含", "脸型、身体线条精修", "造型维护建议"],
      },
    ],
    booking: {
      title: "预约一个舒服的洗护时段",
      copy: "填写信息后，门店会根据宠物体型和护理项目预留合适时长，并尽快联系你确认。",
      info: [
        ["营业时间", "10:00 - 20:00"],
        ["最后接宠", "18:30"],
        ["门店电话", "021-8888-6622"],
      ],
    },
    form: {
      labels: {
        name: "主人姓名",
        phone: "联系电话",
        pet: "宠物类型",
        service: "预约项目",
        date: "到店日期",
        time: "偏好时段",
        note: "备注",
      },
      placeholders: {
        name: "例如：王女士",
        phone: "请输入手机号",
        note: "例如：胆小、怕吹风、最近有皮肤问题等",
      },
      petOptions: [
        ["小型犬", "小型犬"],
        ["中大型犬", "中大型犬"],
        ["短毛猫", "短毛猫"],
        ["长毛猫", "长毛猫"],
      ],
      serviceOptions: [
        ["基础洁净洗护", "基础洁净洗护"],
        ["猫咪低压护理", "猫咪低压护理"],
        ["精修造型", "精修造型"],
        ["SPA 护理", "SPA 护理"],
      ],
      timeOptions: [
        ["早餐 09:30", "早餐 09:30"],
        ["上午 10:00 - 12:00", "上午 10:00 - 12:00"],
        ["下午 13:00 - 16:00", "下午 13:00 - 16:00"],
        ["傍晚 16:00 - 18:30", "傍晚 16:00 - 18:30"],
      ],
      submit: "提交",
      submitting: "提交中...",
      success: "预约已提交，门店会尽快联系你确认。",
      submitError: "预约提交失败，请稍后再试。",
      networkError: "网络暂时不可用，请稍后再试。",
    },
    reviewsHead: {
      title: "主人们的真实反馈",
      copy: "每只宠物离店前都会做二次检查，确保毛发全干、耳道清爽、情绪稳定。",
    },
    reviewsAria: "客户评价轮播",
    starAria: "五星评价",
    repeatLabel: "已复购",
    reviews: [
      {
        title: "“第一次洗完没有躲床底。”",
        copy: "我家猫很怕陌生环境，店员会慢慢安抚，还发了过程照片，回家状态很好。",
        name: "米粒妈妈",
        pet: "英短猫 · 低压洗护",
      },
      {
        title: "“剪得清爽，也没有剃秃。”",
        copy: "比熊的脸型修得很圆，腿部线条也自然，店员还教了日常梳毛方式。",
        name: "Lucky 爸爸",
        pet: "比熊 · 精修造型",
      },
      {
        title: "“价格提前确认，很安心。”",
        copy: "毛结比较多，开洗前就说清楚处理方式和费用，交付也很细致。",
        name: "豆包主人",
        pet: "长毛猫 · 毛结护理",
      },
      {
        title: "“洗完毛特别蓬松。”",
        copy: "萨摩洗完没有潮味，脚底毛和指甲也修得干净，回家一路都很开心。",
        name: "雪球姐姐",
        pet: "萨摩耶 · 基础洗护",
      },
      {
        title: "“胆小狗也能慢慢适应。”",
        copy: "店员没有急着上吹风机，会分段休息，还把敏感位置记录下来，下次很省心。",
        name: "奶茶妈妈",
        pet: "贵宾犬 · 安抚洗护",
      },
      {
        title: "“交付反馈非常详细。”",
        copy: "耳朵有点泛红，店里拍照提醒并建议观察，感觉不是只做表面功夫。",
        name: "可乐爸爸",
        pet: "柯基 · 日常护理",
      },
      {
        title: "“猫狗分区很加分。”",
        copy: "猫咪预约的时段比较安静，没有被狗叫声吓到，洗完还愿意吃零食。",
        name: "团子主人",
        pet: "布偶猫 · 低压护理",
      },
      {
        title: "“造型保持得久。”",
        copy: "修完两周脸型还很整齐，店员教的梳毛顺序真的有用，打结少了很多。",
        name: "奥利奥妈妈",
        pet: "泰迪 · 精修造型",
      },
    ],
    contact: {
      title: "到店信息",
      copy: "上海市宜川路街道陕西北路 1620 号 · 近普陀区人民医院、华生大厦。门口可短暂停留，接送宠物请提前 2 小时预约。",
      tags: ["猫狗分区", "可视护理", "接送服务", "会员储值"],
      mapAria: "毛孩子浴所门店位置示意图",
      mapAlt: "毛孩子浴所位于上海市宜川路街道陕西北路1620号的宠物风格地图",
    },
    footer: {
      copyright: "© 2026 毛孩子浴所 Pet Grooming Studio",
      contact: "预约电话：021-8888-6622 · 微信：maohai-6622",
    },
  },
  en: {
    langName: "English",
    nextLang: "中",
    brand: "Furkid Bathhouse",
    logoText: "Paw",
    homeAria: "Furkid Bathhouse home",
    navAria: "Page navigation",
    nav: ["Services", "Process", "Pricing", "Visit"],
    bookingCta: "Book a Bath",
    heroAria: "Pet grooming studio hero",
    heroSlides: [
      {
        src: "/assets/store-reception.png",
        alt: "Premium pet grooming studio reception, waiting area, and retail display",
      },
      {
        src: "/assets/store-wash-area.png",
        alt: "Glass-front pet wash area with professional grooming stations",
      },
      {
        src: "/assets/store-cat-room.png",
        alt: "Quiet cat care room and drying area in a premium grooming studio",
      },
    ],
    heroEyebrow: "Low-stress grooming · Separate cat and dog zones",
    heroTitle: "Professional pet grooming that feels calm and clean",
    heroCopy:
      "From coat checks and ear care to drying and styling, we use transparent steps and gentle products so pets feel relaxed and owners feel assured.",
    heroPrimary: "Book Now",
    heroSecondary: "View Pricing",
    highlightsAria: "Studio highlights",
    highlights: [
      ["45-90 min", "Time planned by size and coat condition"],
      ["Visible care", "Photo updates at key grooming steps"],
      ["Cat/dog zones", "Less odor, noise, and stress"],
      ["Local pickup", "Available within 3 km by appointment"],
    ],
    serviceHead: {
      title: "Care tailored to each pet",
      copy: "We look beyond cleanliness to skin condition, tangles, mood, and seasonal coat needs. First visits include a basic assessment.",
    },
    services: [
      {
        title: "Essential Clean Bath",
        copy: "For routine care, including bath, drying, brushing, ear and eye care, paw-pad trimming, and nail smoothing.",
        tags: ["Daily care", "Gentle wash"],
        pet: "dog",
      },
      {
        title: "Precision Styling",
        copy: "Styling based on breed, face shape, and lifestyle, balancing a polished look with easy upkeep and summer comfort.",
        tags: ["Poodle & Bichon", "Style design"],
        pet: "dog",
      },
      {
        title: "Low-Stress Cat Care",
        copy: "Private cat room, low-noise drying, and two-person calming support to reduce stress for long-haired cats, shedding seasons, and light tangles.",
        tags: ["Cat friendly", "Low-noise room"],
        pet: "cat",
      },
    ],
    processHead: "A calm visit in four steps",
    processVisual: {
      aria: "Pet grooming process illustration",
      record: "Care Record",
      checks: ["Coat check", "Ear & eye care", "Dry & brush"],
      tools: ["Brush", "Nail clipper", "Low-heat dryer"],
    },
    steps: [
      ["01", "Arrival Check", "We record weight, skin condition, tangles, and personality to confirm the right care plan for the day."],
      ["02", "Zone-Based Wash", "Pet-safe products are used, with water temperature, pressure, and contact time adjusted for sensitive skin."],
      ["03", "Dry & Brush", "We absorb moisture first, then dry at low heat while brushing out loose coat to reduce skin risks."],
      ["04", "Handover Notes", "You receive care photos, health reminders, and at-home brushing tips for continued care."],
    ],
    pricingHead: {
      title: "Clear pricing, no surprise add-ons",
      copy: "Pricing is confirmed by size, coat volume, and tangles. Severe matting, aggressive behavior, or skin concerns are discussed before care begins.",
    },
    priceSuffix: "from",
    prices: [
      {
        title: "Small Dog Essential Bath",
        subtitle: "Approx. under 6 kg",
        price: "¥88",
        items: ["Double wash and coat care", "Ear/eye cleaning and nail smoothing", "Basic paw-pad and sanitary trimming"],
      },
      {
        title: "Low-Stress Cat Bath",
        subtitle: "Short-hair / long-hair pricing",
        price: "¥168",
        items: ["Private cat-room appointment", "Low-noise drying and calming support", "Shedding-season loose-coat brushing"],
      },
      {
        title: "Precision Styling Package",
        subtitle: "Confirmed by breed and style difficulty",
        price: "¥198",
        items: ["Includes essential bath care", "Face and body line shaping", "Style maintenance tips"],
      },
    ],
    booking: {
      title: "Reserve a comfortable grooming slot",
      copy: "Share a few details and our team will reserve the right time based on your pet's size and selected service, then contact you to confirm.",
      info: [
        ["Business Hours", "10:00 - 20:00"],
        ["Last Drop-Off", "18:30"],
        ["Phone", "021-8888-6622"],
      ],
    },
    form: {
      labels: {
        name: "Owner Name",
        phone: "Phone",
        pet: "Pet Type",
        service: "Service",
        date: "Visit Date",
        time: "Preferred Time",
        note: "Notes",
      },
      placeholders: {
        name: "e.g. Ms. Wang",
        phone: "Enter your phone number",
        note: "e.g. shy, afraid of dryers, recent skin concerns",
      },
      petOptions: [
        ["小型犬", "Small dog"],
        ["中大型犬", "Medium/large dog"],
        ["短毛猫", "Short-haired cat"],
        ["长毛猫", "Long-haired cat"],
      ],
      serviceOptions: [
        ["基础洁净洗护", "Essential clean bath"],
        ["猫咪低压护理", "Low-stress cat care"],
        ["精修造型", "Precision styling"],
        ["SPA 护理", "SPA care"],
      ],
      timeOptions: [
        ["早餐 09:30", "Early 09:30"],
        ["上午 10:00 - 12:00", "Morning 10:00 - 12:00"],
        ["下午 13:00 - 16:00", "Afternoon 13:00 - 16:00"],
        ["傍晚 16:00 - 18:30", "Evening 16:00 - 18:30"],
      ],
      submit: "Submit",
      submitting: "Submitting...",
      success: "Your request has been sent. The studio will contact you soon to confirm.",
      submitError: "The booking request could not be submitted. Please try again later.",
      networkError: "The network is temporarily unavailable. Please try again later.",
    },
    reviewsHead: {
      title: "Real feedback from pet owners",
      copy: "Every pet gets a second check before leaving, so the coat is fully dry, ears are clean, and mood is steady.",
    },
    reviewsAria: "Customer review carousel",
    starAria: "Five-star review",
    repeatLabel: "Returned",
    reviews: [
      {
        title: "\"She did not hide after her first bath.\"",
        copy: "My cat is nervous in new places. The staff calmed her slowly, sent process photos, and she was relaxed after coming home.",
        name: "Mili's Mom",
        pet: "British Shorthair · Low-stress bath",
      },
      {
        title: "\"Fresh cut, never shaved too short.\"",
        copy: "The Bichon face came out round and natural. The team also taught us a better daily brushing routine.",
        name: "Lucky's Dad",
        pet: "Bichon · Precision styling",
      },
      {
        title: "\"Pricing was confirmed upfront.\"",
        copy: "There were many tangles, but the team explained the plan and cost before starting. The handover was very detailed.",
        name: "Doubau's Owner",
        pet: "Long-haired cat · Tangle care",
      },
      {
        title: "\"The coat came back so fluffy.\"",
        copy: "Our Samoyed had no damp smell after the bath, and the paw pads and nails were neat. He was happy all the way home.",
        name: "Snowball's Sister",
        pet: "Samoyed · Essential bath",
      },
      {
        title: "\"Even shy dogs can adjust.\"",
        copy: "They did not rush into the dryer, gave breaks, and recorded sensitive spots for next time. That saves so much worry.",
        name: "Milk Tea's Mom",
        pet: "Poodle · Calming wash",
      },
      {
        title: "\"The handover notes were excellent.\"",
        copy: "The team noticed slight redness in the ears, sent photos, and suggested what to watch. It felt truly attentive.",
        name: "Cola's Dad",
        pet: "Corgi · Routine care",
      },
      {
        title: "\"Separate cat and dog zones help a lot.\"",
        copy: "The cat appointment time was quiet, with no barking nearby. She even accepted treats after the bath.",
        name: "Tuanzi's Owner",
        pet: "Ragdoll · Low-stress care",
      },
      {
        title: "\"The style holds for weeks.\"",
        copy: "Two weeks later the face shape still looks tidy, and the brushing order they taught us really reduced tangles.",
        name: "Oreo's Mom",
        pet: "Teddy · Precision styling",
      },
    ],
    contact: {
      title: "Visit Information",
      copy: "1620 Shaanxi North Road, Yichuan Road Subdistrict, Shanghai · Near Putuo District People's Hospital and Huasheng Tower. Short curbside stops are available; please book pet pickup two hours ahead.",
      tags: ["Cat/dog zones", "Visible care", "Pickup service", "Member credit"],
      mapAria: "Furkid Bathhouse location map",
      mapAlt: "Pet-style map showing Furkid Bathhouse at 1620 Shaanxi North Road, Yichuan Road Subdistrict, Shanghai",
    },
    footer: {
      copyright: "© 2026 Furkid Bathhouse Pet Grooming Studio",
      contact: "Phone: 021-8888-6622 · WeChat: maohai-6622",
    },
  },
};

const navTargets = ["#services", "#process", "#pricing", "#contact"];

function Button({ href, children, secondary = false, gold = false }) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-[18px] font-bold shadow-[0_12px_30px_rgba(23,32,29,.16)] transition hover:-translate-y-0.5 ${
        secondary
          ? "border border-line bg-white text-ink shadow-none"
          : gold
          ? "bg-gold text-ink"
          : "bg-ink text-white"
      }`}
      href={href}
    >
      {children}
    </a>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full bg-mint px-2.5 py-1 text-[13px] font-bold text-[#24645f]">
      {children}
    </span>
  );
}

function SectionHead({ title, copy }) {
  return (
    <div className="mb-8 grid gap-5 md:flex md:items-end md:justify-between md:gap-7">
      <h2 className="m-0 text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.08] tracking-normal">
        {title}
      </h2>
      {copy ? <p className="m-0 max-w-[440px] text-muted">{copy}</p> : null}
    </div>
  );
}

function PetArt({ type }) {
  const isCat = type === "cat";
  return (
    <div
      className="pet-art absolute left-1/2 top-1/2 h-[118px] w-[132px] -translate-x-1/2 -translate-y-[44%]"
      aria-hidden="true"
    >
      <span
        className={`absolute top-1.5 ${
          isCat
            ? "ear cat-left left-3 -rotate-[18deg]"
            : "left-3 h-[54px] w-[34px] -rotate-[18deg] rounded-[25px_25px_8px_8px] bg-[#8c684e]"
        }`}
      />
      <span
        className={`absolute top-1.5 ${
          isCat
            ? "ear cat-left right-3 rotate-[18deg]"
            : "right-3 h-[54px] w-[34px] rotate-[18deg] rounded-[25px_25px_8px_8px] bg-[#8c684e]"
        }`}
      />
      <span className="absolute left-[18px] top-4 h-[86px] w-24 rounded-[42%_42%_48%_48%] bg-[#f8f0df] shadow-[inset_0_-9px_rgba(239,115,93,.08),0_18px_34px_rgba(23,32,29,.12)]" />
      <span className="absolute left-[46px] top-[47px] h-2.5 w-2.5 rounded-full bg-ink" />
      <span className="absolute right-[46px] top-[47px] h-2.5 w-2.5 rounded-full bg-ink" />
      <span className="absolute left-1/2 top-[60px] h-[30px] w-10 -translate-x-1/2 rounded-[20px] bg-white" />
      <span className="absolute left-1/2 top-[65px] h-2.5 w-3.5 -translate-x-1/2 rounded-[9px_9px_12px_12px] bg-ink" />
      <span className="absolute right-0 top-0 h-7 w-7 rounded-full bg-white/80 shadow-[0_8px_22px_rgba(29,123,115,.12)]" />
      <span className="absolute left-0.5 top-16 h-[18px] w-[18px] rounded-full bg-white/80 shadow-[0_8px_22px_rgba(29,123,115,.12)]" />
    </div>
  );
}

function ProcessVisual({ copy }) {
  return (
    <figure
      className="relative m-0 min-h-[520px] overflow-hidden rounded-lg bg-[linear-gradient(145deg,rgba(29,123,115,.12),transparent_38%),linear-gradient(135deg,#ffffff,#d9efe5)] shadow-soft max-[900px]:min-h-[420px] max-[560px]:min-h-[360px]"
      aria-label={copy.aria}
    >
      <div className="absolute inset-8 overflow-hidden rounded-lg border border-ink/10 bg-white/70 backdrop-blur max-[560px]:inset-4">
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(90deg,rgba(29,123,115,.12),rgba(244,189,85,.2),rgba(239,115,93,.12))]" />
        <div className="absolute left-8 top-10 h-[250px] w-20 rounded-full bg-teal/10 max-[560px]:left-5 max-[560px]:top-8 max-[560px]:h-[210px]">
          <span className="absolute left-1/2 top-5 h-24 w-2 -translate-x-1/2 rounded-full bg-teal" />
          <span className="absolute left-1/2 top-[116px] h-10 w-10 -translate-x-1/2 rounded-full border-[10px] border-teal bg-white" />
          <span className="absolute left-[54px] top-[134px] h-2 w-20 origin-left rotate-[28deg] rounded-full bg-teal max-[560px]:w-14" />
          <span className="absolute left-[118px] top-[168px] h-10 w-10 rounded-full bg-gold/80 shadow-[0_10px_24px_rgba(244,189,85,.28)] max-[560px]:left-[96px]" />
          <span className="absolute left-[132px] top-[184px] h-2 w-7 rotate-45 rounded-full bg-teal max-[560px]:left-[110px]" />
        </div>

        <div className="absolute bottom-[82px] left-16 right-28 h-28 rounded-[26px_26px_70px_70px] bg-teal shadow-[inset_0_-18px_rgba(0,0,0,.1),0_22px_40px_rgba(29,123,115,.18)] max-[900px]:right-20 max-[560px]:bottom-[72px] max-[560px]:left-8 max-[560px]:right-8 max-[560px]:h-24">
          <div className="absolute inset-x-8 top-0 h-9 rounded-b-[36px] bg-white/12" />
          <div className="absolute -top-16 left-1/2 h-28 w-32 -translate-x-1/2 rounded-[46%_46%_50%_50%] bg-[#f8f0df] shadow-[0_18px_32px_rgba(23,32,29,.15)] max-[560px]:h-24 max-[560px]:w-28">
            <span className="absolute -left-3 top-4 h-10 w-7 -rotate-12 rounded-full bg-[#8c684e]" />
            <span className="absolute -right-3 top-4 h-10 w-7 rotate-12 rounded-full bg-[#8c684e]" />
            <span className="absolute left-10 top-11 h-2.5 w-2.5 rounded-full bg-ink" />
            <span className="absolute right-10 top-11 h-2.5 w-2.5 rounded-full bg-ink" />
            <span className="absolute left-1/2 top-[58px] h-7 w-10 -translate-x-1/2 rounded-full bg-white" />
            <span className="absolute left-1/2 top-[62px] h-2.5 w-3 -translate-x-1/2 rounded-full bg-ink" />
          </div>
          <span className="absolute -top-12 left-[18%] h-8 w-8 rounded-full bg-white/80 shadow-[0_8px_18px_rgba(29,123,115,.14)]" />
          <span className="absolute -top-20 left-[30%] h-5 w-5 rounded-full bg-white/75 shadow-[0_8px_18px_rgba(29,123,115,.14)]" />
          <span className="absolute -top-10 right-[22%] h-6 w-6 rounded-full bg-white/80 shadow-[0_8px_18px_rgba(29,123,115,.14)]" />
        </div>

        <div className="absolute right-8 top-12 w-44 rounded-lg border border-line bg-white p-4 shadow-card max-[560px]:right-5 max-[560px]:top-5 max-[560px]:w-36 max-[560px]:p-3">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-extrabold text-ink max-[560px]:text-xs">
              {copy.record}
            </span>
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-gold text-xs font-black text-ink">
              ✓
            </span>
          </div>
          <div className="grid gap-2 text-xs font-bold text-muted">
            <span className="rounded-full bg-mint px-2 py-1 text-teal">
              {copy.checks[0]}
            </span>
            <span className="rounded-full bg-[#fff3d6] px-2 py-1 text-[#8a5d12]">
              {copy.checks[1]}
            </span>
            <span className="rounded-full bg-[#ffe3de] px-2 py-1 text-[#9a4134]">
              {copy.checks[2]}
            </span>
          </div>
        </div>

        <div className="absolute bottom-7 left-10 right-10 grid grid-cols-3 gap-3 max-[560px]:left-5 max-[560px]:right-5 max-[560px]:bottom-5">
          {copy.tools.map((item) => (
            <div
              className="grid min-h-12 place-items-center rounded-lg border border-ink/10 bg-white/75 px-2 text-center text-xs font-extrabold text-teal shadow-[0_10px_22px_rgba(27,44,39,.08)]"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}

function LanguageSwitch({ language, onToggle, copy }) {
  return (
    <button
      className="language-switch fixed right-5 top-[172px] z-30 grid h-14 w-14 place-items-center rounded-full border border-white/60 bg-white/90 text-sm font-black text-teal shadow-[0_14px_34px_rgba(23,32,29,.18)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white max-[560px]:right-3 max-[560px]:top-[82px] max-[560px]:h-12 max-[560px]:w-12"
      type="button"
      onClick={onToggle}
      aria-label={`${copy.langName} / ${copy.nextLang}`}
      title={`${copy.langName} / ${copy.nextLang}`}
    >
      <span className="leading-none">{language === "zh" ? "EN" : "中"}</span>
    </button>
  );
}

export default function Home() {
  const [language, setLanguage] = useState("zh");
  const copy = content[language];

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  function toggleLanguage() {
    setLanguage((current) => (current === "zh" ? "en" : "zh"));
  }

  return (
    <>
      <LanguageSwitch language={language} onToggle={toggleLanguage} copy={copy} />
      <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex min-h-[72px] max-w-[1180px] items-center justify-between gap-5 px-6 max-[560px]:min-h-[66px] max-[560px]:px-4">
          <a
            className="inline-flex items-center gap-2.5 whitespace-nowrap font-extrabold"
            href="#top"
            aria-label={copy.homeAria}
          >
            <span className="grid h-[38px] w-[38px] place-items-center rounded-xl bg-teal text-white shadow-[0_10px_24px_rgba(29,123,115,.25)]">
              {copy.logoText}
            </span>
            <span className="max-[560px]:max-w-32 max-[560px]:overflow-hidden max-[560px]:text-ellipsis">
              {copy.brand}
            </span>
          </a>
          <nav
            className="flex items-center gap-5 text-[15px] text-muted max-[900px]:hidden"
            aria-label={copy.navAria}
          >
            {copy.nav.map((item, index) => (
              <a href={navTargets[index]} key={item}>
                {item}
              </a>
            ))}
          </nav>
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-ink px-[18px] font-bold text-white shadow-[0_12px_30px_rgba(23,32,29,.16)] max-[560px]:min-h-10 max-[560px]:px-3 max-[560px]:text-sm"
            href="#booking"
          >
            {copy.bookingCta}
          </a>
        </div>
      </header>

      <main id="top">
        <section
          className="relative grid min-h-[calc(100vh-72px)] items-end overflow-hidden bg-ink after:absolute after:inset-0 after:bg-[linear-gradient(90deg,rgba(11,22,19,.82),rgba(11,22,19,.5)_46%,rgba(11,22,19,.1)),linear-gradient(0deg,rgba(11,22,19,.78),transparent_40%)] max-[560px]:min-h-0"
          aria-label={copy.heroAria}
        >
          <div className="absolute inset-0">
            {copy.heroSlides.map((slide) => (
              <figure
                className="hero-slide absolute inset-0 m-0 opacity-0"
                key={slide.src}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  priority={slide.src.includes("reception")}
                  className="object-cover"
                />
              </figure>
            ))}
            <div
              className="absolute bottom-6 right-6 z-[2] flex gap-2 max-[560px]:bottom-3.5 max-[560px]:right-[18px]"
              aria-hidden="true"
            >
              <span className="hero-dot h-1 w-9 rounded-full bg-white/30 max-[560px]:w-[26px]" />
              <span className="hero-dot h-1 w-9 rounded-full bg-white/30 max-[560px]:w-[26px]" />
              <span className="hero-dot h-1 w-9 rounded-full bg-white/30 max-[560px]:w-[26px]" />
            </div>
          </div>
          <div className="relative z-[1] mx-auto w-full max-w-[1180px] px-6 pb-[74px] pt-[110px] text-white max-[560px]:px-[18px] max-[560px]:pb-[30px] max-[560px]:pt-[66px]">
            <div className="mb-[18px] inline-flex items-center gap-2 text-sm font-bold text-[#f9df94]">
              <span className="h-[9px] w-[9px] rounded-full bg-gold" />
              {copy.heroEyebrow}
            </div>
            <h1 className="m-0 max-w-[760px] text-[clamp(38px,5vw,68px)] font-extrabold leading-[1.08] tracking-normal">
              {copy.heroTitle}
            </h1>
            <p className="mb-[30px] mt-[22px] max-w-[650px] text-[clamp(17px,2vw,21px)] text-white/80 max-[560px]:mb-6 max-[560px]:mt-[18px]">
              {copy.heroCopy}
            </p>
            <div className="mb-[50px] flex flex-wrap gap-3 max-[560px]:mb-[30px]">
              <Button href="#booking" gold>
                {copy.heroPrimary}
              </Button>
              <Button href="#pricing" secondary>
                {copy.heroSecondary}
              </Button>
            </div>
            <div
              className="grid max-w-[920px] grid-cols-4 gap-px overflow-hidden rounded-lg border border-white/20 bg-white/20 backdrop-blur max-[900px]:grid-cols-1 max-[560px]:grid-cols-2"
              aria-label={copy.highlightsAria}
            >
              {copy.highlights.map(([title, itemCopy]) => (
                <div
                  className="min-h-24 bg-white/10 p-[18px] max-[560px]:min-h-[76px] max-[560px]:p-3"
                  key={title}
                >
                  <strong className="block text-xl max-[560px]:text-[17px]">
                    {title}
                  </strong>
                  <span className="mt-1 block text-sm text-white/70">{itemCopy}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="px-6 py-[86px] max-[560px]:px-[18px] max-[560px]:py-[62px]">
          <div className="mx-auto max-w-[1180px]">
            <SectionHead
              title={copy.serviceHead.title}
              copy={copy.serviceHead.copy}
            />
            <div className="grid grid-cols-3 gap-[18px] max-[900px]:grid-cols-1">
              {copy.services.map((service) => (
                <article
                  className="overflow-hidden rounded-lg border border-line bg-white shadow-card"
                  key={service.title}
                >
                  <div className="relative h-[230px] overflow-hidden bg-[radial-gradient(circle_at_18%_20%,rgba(244,189,85,.5),transparent_24%),linear-gradient(135deg,#d9efe5,#fff6df)] before:absolute before:right-[-22px] before:top-[22px] before:h-[110px] before:w-[110px] before:rounded-full before:bg-white/40 after:absolute after:bottom-5 after:left-6 after:h-[70px] after:w-[70px] after:rounded-full after:bg-white/40">
                    <PetArt type={service.pet} />
                  </div>
                  <div className="p-[22px]">
                    <h3 className="mb-2 mt-0 text-[21px] font-extrabold">
                      {service.title}
                    </h3>
                    <p className="m-0 text-muted">{service.copy}</p>
                    <div className="mt-[18px] flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-[#ecf5ef] px-6 py-[86px] max-[560px]:px-[18px] max-[560px]:py-[62px]">
          <div className="mx-auto grid max-w-[1180px] grid-cols-[1.1fr_.9fr] items-center gap-10 max-[900px]:grid-cols-1">
            <ProcessVisual copy={copy.processVisual} />
            <div>
              <SectionHead title={copy.processHead} />
              <div className="grid gap-3.5">
                {copy.steps.map(([number, title, itemCopy]) => (
                  <div
                    className="grid grid-cols-[42px_1fr] gap-4 border-b border-ink/10 py-[18px]"
                    key={number}
                  >
                    <span className="grid h-[42px] w-[42px] place-items-center rounded-lg bg-teal font-extrabold text-white">
                      {number}
                    </span>
                    <div>
                      <h3 className="mb-1 mt-0 text-xl font-extrabold">{title}</h3>
                      <p className="m-0 text-muted">{itemCopy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="px-6 py-[86px] max-[560px]:px-[18px] max-[560px]:py-[62px]">
          <div className="mx-auto max-w-[1180px]">
            <SectionHead
              title={copy.pricingHead.title}
              copy={copy.pricingHead.copy}
            />
            <div className="grid grid-cols-3 gap-[18px] max-[900px]:grid-cols-1">
              {copy.prices.map((item) => (
                <article
                  className="rounded-lg border border-line bg-white p-[26px] shadow-card"
                  key={item.title}
                >
                  <h3 className="mb-2 mt-0 text-[21px] font-extrabold">{item.title}</h3>
                  <p className="m-0 text-muted">{item.subtitle}</p>
                  <div className="my-5 text-[44px] font-black leading-none">
                    {item.price}{" "}
                    <small className="text-[15px] font-semibold text-muted">
                      {copy.priceSuffix}
                    </small>
                  </div>
                  <ul className="price-list m-0 grid list-none gap-2.5 p-0 text-muted">
                    {item.items.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="bg-[#17332f] px-6 py-[86px] text-white max-[560px]:px-[18px] max-[560px]:py-[62px]">
          <div className="mx-auto grid max-w-[1180px] grid-cols-[.95fr_1.05fr] items-start gap-[42px] max-[900px]:grid-cols-1">
            <div>
              <h2 className="m-0 text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.08] tracking-normal">
                {copy.booking.title}
              </h2>
              <p className="mb-7 mt-[18px] max-w-[470px] text-white/75">
                {copy.booking.copy}
              </p>
              <div className="mt-[30px] grid max-w-[410px] gap-2.5 text-white/80">
                {copy.booking.info.map(([label, value]) => (
                  <div
                    className="flex justify-between gap-[18px] border-b border-white/15 pb-2.5"
                    key={label}
                  >
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>
            <BookingForm copy={copy.form} />
          </div>
        </section>

        <section className="px-6 py-[86px] max-[560px]:px-[18px] max-[560px]:py-[62px]">
          <div className="mx-auto max-w-[1180px]">
            <SectionHead
              title={copy.reviewsHead.title}
              copy={copy.reviewsHead.copy}
            />
            <div className="reviews-carousel overflow-hidden" aria-label={copy.reviewsAria}>
              <div className="reviews-track flex w-max gap-[18px]">
                {[0, 1].map((group) => (
                  <div
                    className="reviews-strip flex gap-[18px]"
                    key={group}
                    aria-hidden={group === 1}
                  >
                    {copy.reviews.map((review) => (
                      <article
                        className="review-card flex min-h-[252px] w-[min(360px,82vw)] flex-col rounded-lg border border-line bg-white p-6 shadow-card"
                        key={`${review.title}-${group}`}
                      >
                        <div className="mb-4 flex items-center justify-between gap-4">
                          <div className="text-lg tracking-normal text-coral" aria-label={copy.starAria}>
                            ★★★★★
                          </div>
                          <span className="rounded-full bg-mint px-2.5 py-1 text-xs font-extrabold text-teal">
                            {copy.repeatLabel}
                          </span>
                        </div>
                        <strong className="mb-3 block text-[21px] leading-tight">
                          {review.title}
                        </strong>
                        <p className="m-0 flex-1 text-muted">{review.copy}</p>
                        <div className="mt-5 border-t border-ink/10 pt-4">
                          <strong className="block text-sm">{review.name}</strong>
                          <span className="mt-1 block text-sm text-muted">{review.pet}</span>
                        </div>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-[86px] max-[560px]:px-[18px] max-[560px]:py-[62px]">
          <div className="mx-auto flex max-w-[1180px] flex-col gap-[18px]">
            <div className="rounded-lg border border-line bg-white p-[26px] shadow-card">
              <h2 className="m-0 text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.08] tracking-normal">
                {copy.contact.title}
              </h2>
              <p className="mt-3 text-muted">
                {copy.contact.copy}
              </p>
              <div className="mt-[18px] flex flex-wrap gap-2">
                {copy.contact.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
            <figure
              className="relative m-0 aspect-[1672/941] min-h-[280px] w-full overflow-hidden rounded-lg bg-[#edf6f1] shadow-soft max-[560px]:aspect-[4/3] max-[560px]:min-h-0"
              aria-label={copy.contact.mapAria}
            >
              <Image
                src="/assets/store-map-shaanxi-north-road.png"
                alt={copy.contact.mapAlt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </figure>
          </div>
        </section>
      </main>

      <footer className="bg-ink px-6 py-7 text-white/70">
        <div className="mx-auto flex max-w-[1180px] justify-between gap-[18px] text-sm max-[560px]:grid">
          <span>{copy.footer.copyright}</span>
          <span>{copy.footer.contact}</span>
        </div>
      </footer>
    </>
  );
}
