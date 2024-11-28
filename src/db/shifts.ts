export const shifts = [
  {
    id: 1,
    startHour: "08:00",
    endHour: "16:30",
    duration: 8.5,
    breaks: [
      {
        startHour: "12:00",
        endHour: "12:30",
        name: "Lunch Break",
      },
      {
        startHour: "15:00",
        endHour: "15:15",
        name: "Afternoon Break",
      },
      {
        startHour: "10:00",
        endHour: "10:15",
        name: "Morning Break",
      },
    ],
  },
  {
    id: 2,
    startHour: "06:00",
    endHour: "14:30",
    duration: 8.5,
    breaks: [
      {
        startHour: "12:00",
        endHour: "12:30",
        name: "Lunch Break",
      },
      {
        startHour: "13:00",
        endHour: "13:15",
        name: "Early Afternoon Break",
      },
      {
        startHour: "08:00",
        endHour: "08:15",
        name: "Early Morning Break",
      },
    ],
  },
];

export const convertTimeToDecimal = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours + minutes / 60;
};
