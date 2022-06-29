export function addSeconds(date: Date, seconds: number) {
  const newDate = new Date(date);
  newDate.setSeconds(date.getSeconds() + seconds);
  return newDate;
}

export function addMinutes(date: Date, minutes: number) {
  const newDate = new Date(date);
  newDate.setMinutes(date.getMinutes() + minutes);

  return newDate;
}

/**
 * Get the time from a date object in MM:SS
 */
export function getTimeFromDate(date: Date) {
  return date
    .toLocaleTimeString()
    .split(":")
    .slice(1)
    .join(":")
    .replace("AM", "")
    .replace("PM", "");
}

export function formatNumber(num: number) {
  if (num < 10) return "0" + num;
  return num;
}
