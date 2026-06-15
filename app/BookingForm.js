"use client";

import { useState, useTransition } from "react";
import BookingDateInput from "./BookingDateInput";

const initialMessage = {
  type: "idle",
  text: "",
};

export default function BookingForm({ copy }) {
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

        await response.json().catch(() => ({}));

        if (!response.ok) {
          setMessage({ type: "error", text: copy.submitError });
          return;
        }

        form.reset();
        setMessage({
          type: "success",
          text: copy.success,
        });
      } catch {
        setMessage({
          type: "error",
          text: copy.networkError,
        });
      }
    });
  }

  return (
    <form
      className="grid grid-cols-2 gap-3.5 rounded-lg border border-white/20 bg-white/10 p-6 max-[560px]:grid-cols-1 max-[560px]:p-[18px]"
      onSubmit={handleSubmit}
    >
      <Field label={copy.labels.name}>
        <input type="text" name="name" placeholder={copy.placeholders.name} required />
      </Field>
      <Field label={copy.labels.phone}>
        <input type="tel" name="phone" placeholder={copy.placeholders.phone} required />
      </Field>
      <Field label={copy.labels.pet}>
        <select name="pet" defaultValue="小型犬" required>
          {copy.petOptions.map(([value, label]) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
      </Field>
      <Field label={copy.labels.service}>
        <select name="service" defaultValue="基础洁净洗护" required>
          {copy.serviceOptions.map(([value, label]) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
      </Field>
      <Field label={copy.labels.date}>
        <BookingDateInput />
      </Field>
      <Field label={copy.labels.time}>
        <select name="time" defaultValue="早餐 09:30" required>
          {copy.timeOptions.map(([value, label]) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
      </Field>
      <Field label={copy.labels.note} wide>
        <textarea
          name="note"
          placeholder={copy.placeholders.note}
        />
      </Field>
      <button
        className="col-span-full inline-flex min-h-11 items-center justify-center rounded-lg bg-gold px-[18px] font-bold text-ink shadow-[0_12px_30px_rgba(23,32,29,.16)] disabled:cursor-not-allowed disabled:opacity-70"
        disabled={isPending}
        type="submit"
      >
        {isPending ? copy.submitting : copy.submit}
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
