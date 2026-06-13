import Image from "next/image";

const heroSlides = [
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
];

const services = [
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
];

const steps = [
  ["01", "到店评估", "记录体重、皮肤状态、毛结位置和宠物性格，确认是否适合当日洗护。"],
  ["02", "分区清洁", "使用宠物专用沐浴产品，敏感皮肤会调整水温、揉洗力度和停留时间。"],
  ["03", "吹干梳理", "先吸水再低温吹干，边吹边梳开浮毛，降低潮湿引发的皮肤问题。"],
  ["04", "交付反馈", "交付护理照片、异常提醒和居家梳毛建议，方便主人持续照护。"],
];

const prices = [
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
];

const reviews = [
  ["“第一次洗完没有躲床底。”", "我家猫很怕陌生环境，店员会慢慢安抚，还发了过程照片，回家状态很好。"],
  ["“剪得清爽，也没有剃秃。”", "比熊的脸型修得很圆，腿部线条也自然，店员还教了日常梳毛方式。"],
  ["“价格提前确认，很安心。”", "毛结比较多，开洗前就说清楚处理方式和费用，交付也很细致。"],
];

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
            ? "cat-left left-3 -rotate-[18deg]"
            : "left-3 h-[54px] w-[34px] -rotate-[18deg] rounded-[25px_25px_8px_8px] bg-[#8c684e]"
        }`}
      />
      <span
        className={`absolute top-1.5 ${
          isCat
            ? "cat-left right-3 rotate-[18deg]"
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

function ProcessVisual() {
  return (
    <figure
      className="relative m-0 min-h-[520px] overflow-hidden rounded-lg bg-[linear-gradient(145deg,rgba(29,123,115,.12),transparent_38%),linear-gradient(135deg,#ffffff,#d9efe5)] shadow-soft max-[900px]:min-h-[420px] max-[560px]:min-h-[360px]"
      aria-label="宠物洗护流程示意图"
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
              护理记录
            </span>
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-gold text-xs font-black text-ink">
              ✓
            </span>
          </div>
          <div className="grid gap-2 text-xs font-bold text-muted">
            <span className="rounded-full bg-mint px-2 py-1 text-teal">皮毛评估</span>
            <span className="rounded-full bg-[#fff3d6] px-2 py-1 text-[#8a5d12]">耳眼清洁</span>
            <span className="rounded-full bg-[#ffe3de] px-2 py-1 text-[#9a4134]">吹干梳理</span>
          </div>
        </div>

        <div className="absolute bottom-7 left-10 right-10 grid grid-cols-3 gap-3 max-[560px]:left-5 max-[560px]:right-5 max-[560px]:bottom-5">
          {["梳子", "指甲剪", "低温吹风"].map((item) => (
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

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex min-h-[72px] max-w-[1180px] items-center justify-between gap-5 px-6 max-[560px]:min-h-[66px] max-[560px]:px-4">
          <a
            className="inline-flex items-center gap-2.5 whitespace-nowrap font-extrabold"
            href="#top"
            aria-label="毛孩子浴所首页"
          >
            <span className="grid h-[38px] w-[38px] place-items-center rounded-xl bg-teal text-white shadow-[0_10px_24px_rgba(29,123,115,.25)]">
              爪
            </span>
            <span className="max-[560px]:max-w-32 max-[560px]:overflow-hidden max-[560px]:text-ellipsis">
              毛孩子浴所
            </span>
          </a>
          <nav
            className="flex items-center gap-5 text-[15px] text-muted max-[900px]:hidden"
            aria-label="页面导航"
          >
            <a href="#services">洗护服务</a>
            <a href="#process">护理流程</a>
            <a href="#pricing">套餐价格</a>
            <a href="#contact">到店信息</a>
          </nav>
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-ink px-[18px] font-bold text-white shadow-[0_12px_30px_rgba(23,32,29,.16)] max-[560px]:min-h-10 max-[560px]:px-3 max-[560px]:text-sm"
            href="#booking"
          >
            预约洗护
          </a>
        </div>
      </header>

      <main id="top">
        <section
          className="relative grid min-h-[calc(100vh-72px)] items-end overflow-hidden bg-ink after:absolute after:inset-0 after:bg-[linear-gradient(90deg,rgba(11,22,19,.82),rgba(11,22,19,.5)_46%,rgba(11,22,19,.1)),linear-gradient(0deg,rgba(11,22,19,.78),transparent_40%)] max-[560px]:min-h-0"
          aria-label="宠物洗护店首屏"
        >
          <div className="absolute inset-0">
            {heroSlides.map((slide) => (
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
              低压安抚洗护 · 猫狗分区护理
            </div>
            <h1 className="m-0 max-w-[760px] text-[clamp(38px,5vw,68px)] font-extrabold leading-[1.08] tracking-normal">
              专业宠物洗护，让毛孩子干净又放松
            </h1>
            <p className="mb-[30px] mt-[22px] max-w-[650px] text-[clamp(17px,2vw,21px)] text-white/80 max-[560px]:mb-6 max-[560px]:mt-[18px]">
              从皮毛评估、耳眼清洁到吹干造型，我们用透明流程和温和产品，让宠物干净、放松，也让主人放心。
            </p>
            <div className="mb-[50px] flex flex-wrap gap-3 max-[560px]:mb-[30px]">
              <Button href="#booking" gold>
                立即预约
              </Button>
              <Button href="#pricing" secondary>
                查看价格
              </Button>
            </div>
            <div
              className="grid max-w-[920px] grid-cols-4 gap-px overflow-hidden rounded-lg border border-white/20 bg-white/20 backdrop-blur max-[900px]:grid-cols-1 max-[560px]:grid-cols-2"
              aria-label="门店亮点"
            >
              {[
                ["45-90 分钟", "按体型和毛量安排时长"],
                ["可视化洗护", "护理节点照片同步"],
                ["猫狗分区", "降低气味与噪音压力"],
                ["同城接送", "3 公里内可预约"],
              ].map(([title, copy]) => (
                <div
                  className="min-h-24 bg-white/10 p-[18px] max-[560px]:min-h-[76px] max-[560px]:p-3"
                  key={title}
                >
                  <strong className="block text-xl max-[560px]:text-[17px]">
                    {title}
                  </strong>
                  <span className="mt-1 block text-sm text-white/70">{copy}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="px-6 py-[86px] max-[560px]:px-[18px] max-[560px]:py-[62px]">
          <div className="mx-auto max-w-[1180px]">
            <SectionHead
              title="按宠物状态定制洗护"
              copy="不只洗干净，更关注皮肤、毛结、情绪和季节性护理需求。首次到店会先做基础评估。"
            />
            <div className="grid grid-cols-3 gap-[18px] max-[900px]:grid-cols-1">
              {services.map((service) => (
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
            <ProcessVisual />
            <div>
              <SectionHead title="四步完成一次安心护理" />
              <div className="grid gap-3.5">
                {steps.map(([number, title, copy]) => (
                  <div
                    className="grid grid-cols-[42px_1fr] gap-4 border-b border-ink/10 py-[18px]"
                    key={number}
                  >
                    <span className="grid h-[42px] w-[42px] place-items-center rounded-lg bg-teal font-extrabold text-white">
                      {number}
                    </span>
                    <div>
                      <h3 className="mb-1 mt-0 text-xl font-extrabold">{title}</h3>
                      <p className="m-0 text-muted">{copy}</p>
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
              title="清晰价格，不临时加项"
              copy="价格按体型、毛量和毛结程度确认。严重打结、攻击行为或皮肤异常会先沟通再处理。"
            />
            <div className="grid grid-cols-3 gap-[18px] max-[900px]:grid-cols-1">
              {prices.map((item) => (
                <article
                  className="rounded-lg border border-line bg-white p-[26px] shadow-card"
                  key={item.title}
                >
                  <h3 className="mb-2 mt-0 text-[21px] font-extrabold">{item.title}</h3>
                  <p className="m-0 text-muted">{item.subtitle}</p>
                  <div className="my-5 text-[44px] font-black leading-none">
                    {item.price}{" "}
                    <small className="text-[15px] font-semibold text-muted">起</small>
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
                预约一个舒服的洗护时段
              </h2>
              <p className="mb-7 mt-[18px] max-w-[470px] text-white/75">
                填写信息后，门店会根据宠物体型和护理项目预留合适时长。表单为页面演示，不会自动提交到服务器。
              </p>
              <div className="mt-[30px] grid max-w-[410px] gap-2.5 text-white/80">
                {[
                  ["营业时间", "10:00 - 20:00"],
                  ["最后接宠", "18:30"],
                  ["门店电话", "021-8888-6622"],
                ].map(([label, value]) => (
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
            <form className="grid grid-cols-2 gap-3.5 rounded-lg border border-white/20 bg-white/10 p-6 max-[560px]:grid-cols-1 max-[560px]:p-[18px]">
              <Field label="主人姓名">
                <input type="text" name="name" placeholder="例如：王女士" />
              </Field>
              <Field label="联系电话">
                <input type="tel" name="phone" placeholder="请输入手机号" />
              </Field>
              <Field label="宠物类型">
                <select name="pet" defaultValue="小型犬">
                  <option>小型犬</option>
                  <option>中大型犬</option>
                  <option>短毛猫</option>
                  <option>长毛猫</option>
                </select>
              </Field>
              <Field label="预约项目">
                <select name="service" defaultValue="基础洁净洗护">
                  <option>基础洁净洗护</option>
                  <option>猫咪低压护理</option>
                  <option>精修造型</option>
                  <option>SPA 护理</option>
                </select>
              </Field>
              <Field label="到店日期">
                <input type="date" name="date" />
              </Field>
              <Field label="偏好时段">
                <select name="time" defaultValue="上午 10:00 - 12:00">
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
                className="col-span-full inline-flex min-h-11 items-center justify-center rounded-lg bg-gold px-[18px] font-bold text-ink shadow-[0_12px_30px_rgba(23,32,29,.16)]"
                type="button"
              >
                提交预约意向
              </button>
            </form>
          </div>
        </section>

        <section className="px-6 py-[86px] max-[560px]:px-[18px] max-[560px]:py-[62px]">
          <div className="mx-auto max-w-[1180px]">
            <SectionHead
              title="主人们的真实反馈"
              copy="每只宠物离店前都会做二次检查，确保毛发全干、耳道清爽、情绪稳定。"
            />
            <div className="grid grid-cols-3 gap-[18px] max-[900px]:grid-cols-1">
              {reviews.map(([title, copy]) => (
                <article
                  className="rounded-lg border border-line bg-white p-6 shadow-card"
                  key={title}
                >
                  <div className="mb-3 text-lg tracking-normal text-coral">★★★★★</div>
                  <strong className="mb-2 block text-[21px]">{title}</strong>
                  <p className="m-0 text-muted">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-[86px] max-[560px]:px-[18px] max-[560px]:py-[62px]">
          <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-[18px] max-[900px]:grid-cols-1">
            <div className="rounded-lg border border-line bg-white p-[26px] shadow-card">
              <h2 className="m-0 text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.08] tracking-normal">
                到店信息
              </h2>
              <p className="mt-3 text-muted">
                上海市宜川路街道陕西北路 1620 号 ·
                近普陀区人民医院、华生大厦。门口可短暂停留，接送宠物请提前 2 小时预约。
              </p>
              <div className="mt-[18px] flex flex-wrap gap-2">
                {["猫狗分区", "可视护理", "接送服务", "会员储值"].map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
            <figure
              className="relative m-0 min-h-[360px] overflow-hidden rounded-lg bg-[#edf6f1] shadow-soft"
              aria-label="毛孩子浴所门店位置示意图"
            >
              <Image
                src="/assets/store-map-shaanxi-north-road.png"
                alt="毛孩子浴所位于上海市宜川路街道陕西北路1620号的宠物风格地图"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="object-cover"
              />
            </figure>
          </div>
        </section>
      </main>

      <footer className="bg-ink px-6 py-7 text-white/70">
        <div className="mx-auto flex max-w-[1180px] justify-between gap-[18px] text-sm max-[560px]:grid">
          <span>© 2026 毛孩子浴所 Pet Grooming Studio</span>
          <span>预约电话：021-8888-6622 · 微信：maohai-6622</span>
        </div>
      </footer>
    </>
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
