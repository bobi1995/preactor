import React from "react";
import { Order, Shift } from "../../../db/interface";
import { calculatePosition } from "../../../utils/task-component-utils";
import Task from "./Task";

interface WeeksViewProps {
  firstDiv: number;
  secondDiv: number;
  thirdDiv: number;
  tasks: Order[];
  day: Date;
  viewType: string;
  shift: Shift;
  machineId: number;
}

const WeeksView: React.FC<WeeksViewProps> = ({
  firstDiv,
  secondDiv,
  thirdDiv,
  tasks,
  day,
  viewType,
  shift,
  machineId,
}) => {
  const numWeeks = 9; // Number of weeks
  const daysPerWeek = 7; // Days per week
  const sectionsPerDay = 3; // Morning, Day, Evening
  const totalDays = numWeeks * daysPerWeek; // Total days in 9 weeks

  const column1 = firstDiv / daysPerWeek;
  const column2 = secondDiv / daysPerWeek;
  const column3 = thirdDiv / daysPerWeek;

  // Define the grid template for a single day, repeated for all weeks
  const gridTemplate = Array(daysPerWeek)
    .fill(`${column1}% ${column2}% ${column3}%`)
    .join(" ");

  const gridDivs = Array(totalDays * sectionsPerDay)
    .fill(null)
    .map((_, index) => {
      const dayOfWeek = Math.floor(index / sectionsPerDay) % daysPerWeek;
      const isWeekend = dayOfWeek === 5 || dayOfWeek === 6; // Saturday or Sunday
      const bgColor =
        index % 3 === 0
          ? "gray"
          : index % 3 === 1
          ? isWeekend
            ? "gray"
            : "green"
          : "gray";

      return (
        <div key={index} className={`bg-${bgColor}-300 relative`}>
          {index % 3 === 1 && // Render tasks only in the green sections
            tasks
              .filter((task) => task.machineId === machineId)
              .map((task) => {
                const position = calculatePosition(
                  task.start,
                  task.end,
                  day,
                  viewType,
                  shift
                );
                if (!position) return null;

                const { left, width } = position;

                return (
                  <Task
                    key={task.id}
                    task={task}
                    left={left}
                    width={width}
                    viewType={viewType}
                  />
                );
              })}
        </div>
      );
    });

  console.log(gridTemplate);
  return (
    <div
      className="relative h-20 border border-black-300 grid"
      style={{
        gridTemplateColumns: gridTemplate,
        gridTemplateRows: `repeat(${numWeeks}, 1fr)`, // One row for each week
      }}
    >
      {gridDivs}
    </div>
  );
};

export default WeeksView;
