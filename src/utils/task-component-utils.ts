import { Shift } from "../db/interface";
import { convertTimeToDecimal } from "../db/shifts";

// Determinates bounds of the timeline based on the current date and the view type
const calculateTimelineBounds = (today: Date, viewType: string) => {
  today.setHours(0, 0, 0, 0); // Midnight today

  if (viewType === "hours") {
    const start = today.getTime();
    const end = new Date(today).setHours(23, 59, 59, 999);
    return { start, end };
  } else if (viewType === "days") {
    const start = today.getTime();
    const end = new Date(today).setDate(today.getDate() + 7); // 7 days ahead
    return { start, end };
  } else {
    const start = today.getTime();
    const end = new Date(today).setDate(today.getDate() + 30); // 30 days ahead
    return { start, end };
  }
};

const adjustTaskForVisiblePeriod = (
  start: string,
  end: string,
  day: Date,
  viewType: string
) => {
  const { start: timelineStart, end: timelineEnd } = calculateTimelineBounds(
    day,
    viewType
  );
  const taskStart = new Date(start).getTime();

  const taskEnd = new Date(end).getTime();
  // Cut off the task at the boundaries of the visible period
  const adjustedStart = Math.max(taskStart, timelineStart);
  const adjustedEnd = Math.min(taskEnd, timelineEnd);
  const duration = adjustedEnd - adjustedStart;

  return { adjustedStart, adjustedEnd, duration };
};

export const calculatePosition = (
  start: string,
  end: string,
  day: Date,
  viewType: string,
  shift: Shift
) => {
  const unixTimestamp = day.getTime();
  const { adjustedStart, adjustedEnd, duration } = adjustTaskForVisiblePeriod(
    start,
    end,
    day,
    viewType
  );

  const { start: timelineStart, end: timelineEnd } = calculateTimelineBounds(
    day,
    viewType
  );

  if (adjustedStart >= timelineEnd || adjustedEnd <= timelineStart) {
    // Task is completely outside the timeline bounds
    return null;
  }

  const timelineWidth = timelineEnd - timelineStart;

  let left = ((adjustedStart - timelineStart) / timelineWidth) * 100; // % from the start of the timeline
  let width = 0; // % of timeline covered by task

  if (viewType === "hours") {
    const startInUnix = new Date();
    startInUnix.setHours(8, 0, 0, 0);
    //Пресмята 1 час в милисекунди и го умножава по продължителността на задачата в милисекунди.
    //След това умножава по 100, за да се получи процентното представяне на задачата спрямо смяната и дели на продължителността на смяната.
    width =
      (parseFloat((duration * (0.001 / 3600)).toFixed(2)) * 100) /
      shift.duration;

    if (width > 100) {
      width = 100;
    }
    //Взима часа на старта на задачата и изважда на часа на старта на смяната. Така се получава колко часа след началото на смяната започва задачата. Накрая дели на
    //продължителността на смяната и умножава по 100, за да се получи процентното представяне на задачата спрямо смяната.
    const startHours =
      new Date(start).getHours() + new Date(start).getMinutes() / 60;

    left =
      ((startHours - convertTimeToDecimal(shift.startHour)) / shift.duration) *
      100;

    if (new Date(start) < day) {
      left = 0;
    }
  } else if (viewType === "days") {
    width =
      (parseFloat((duration * (0.001 / 3600)).toFixed(2)) * 100) /
      shift.duration /
      21;

    const taskStart = new Date(start).getTime(); // Task start time in milliseconds

    left = ((taskStart - timelineStart) / timelineWidth) * 100;
    if (unixTimestamp > taskStart) {
      left = 0;
    }
  } else if (viewType === "weeks") {
    width =
      (parseFloat((duration * (0.001 / 3600)).toFixed(0)) * 100) / (7 * 8 * 9);
  }

  return { left: `${left}%`, width: `${width}%` };
};

//Calculate divs for the shifts
