"use client";

import { useMemo } from "react";

function getTomorrowDateValue() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
  const day = String(tomorrow.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function BookingDateInput() {
  const tomorrowDate = useMemo(() => getTomorrowDateValue(), []);

  return <input type="date" name="date" defaultValue={tomorrowDate} required />;
}
