export function formatDate(
  startDate: string,
  endDate?: string | "Present" | null,
): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };

  const start = new Date(startDate);
  const startStr = start.toLocaleDateString(undefined, options);

  // 1. If endDate is null or undefined, return only the start date
  if (!endDate) {
    return startStr;
  }

  // 2. Handle "Present" vs a Date object
  const endStr =
    endDate === "Present"
      ? "Present"
      : new Date(endDate).toLocaleDateString(undefined, options);

  return `${startStr} - ${endStr}`;
}

type DateRangeItem = {
  startDate?: string;
  endDate?: string | "Present" | null;
};

type DateItem = {
  date?: string | "Present" | null;
};

// Combine types for the generic constraint
type SortableDateItem = DateRangeItem & DateItem;

export const sortByDate = <T extends Partial<SortableDateItem>>(
  items: T[],
): T[] => {
  const getTime = (dateStr?: string | null | "Present") => {
    if (dateStr === "Present") return Date.now();
    if (!dateStr) return 0;
    const time = new Date(dateStr).getTime();
    return isNaN(time) ? 0 : time;
  };

  return [...items].sort((a, b) => {
    // Determine primary comparison date (End Date or Single Date)
    const primaryA = getTime(a.endDate ?? a.date);
    const primaryB = getTime(b.endDate ?? b.date);

    if (primaryA !== primaryB) {
      return primaryB - primaryA;
    }

    // Secondary comparison (Start Date)
    const secondaryA = getTime(a.startDate);
    const secondaryB = getTime(b.startDate);

    return secondaryB - secondaryA;
  });
};
