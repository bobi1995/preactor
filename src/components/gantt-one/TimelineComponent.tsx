import React from "react";
interface TimelineProps {
  viewType: "hours" | "days" | "weeks";
}
const TimelineComponent: React.FC<TimelineProps> = ({ viewType }) => {
  const generateTimeline = () => {
    if (viewType === "hours") {
      return Array.from({ length: 24 }, (_, i) => `${i}:00`);
    } else if (viewType === "days") {
      return Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`);
    } else {
      return Array.from({ length: 9 }, (_, i) => `Week ${i + 1}`);
    }
  };
  return (
    <div className="flex sticky top-[70px] bg-gray-200 z-10">
      {generateTimeline().map((time, index) => (
        <div key={index} className="flex-1 text-center border border-gray-300">
          {time}
        </div>
      ))}
    </div>
  );
};

export default TimelineComponent;
