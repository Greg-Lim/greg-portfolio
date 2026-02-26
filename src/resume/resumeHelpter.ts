export function formatDate(
  startDate: string,
  endDate?: string | "Present",
): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };
  const start = new Date(startDate);
  const end = endDate === "Present" ? "Present" : new Date(endDate || "");
  const startStr = start.toLocaleDateString(undefined, options);
  const endStr =
    end === "Present" ? "Present" : end.toLocaleDateString(undefined, options);
  return `${startStr} - ${endStr}`;
}
