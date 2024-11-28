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
  const numWeeks = 4; // Number of weeks
  const daysPerWeek = 7; // Days per week
  const sectionsPerDay = 3; // Morning, Day, Evening
  const totalDays = numWeeks * daysPerWeek; // Total days in 4 weeks

  const column1 = firstDiv / (daysPerWeek * numWeeks);
  const column2 = secondDiv / (daysPerWeek * numWeeks);
  const column3 = thirdDiv / (daysPerWeek * numWeeks);

  // Define the grid template for a single day, repeated for all weeks
  const gridTemplate = Array(daysPerWeek * numWeeks)
    .fill(`${column1}% ${column2}% ${column3}%`)
    .join(" ");

  const gridDivs = Array(totalDays * sectionsPerDay)
    .fill(null)
    .map((_, index) => {
      const dayOfWeek = Math.floor(index / sectionsPerDay) % daysPerWeek;
      const isWeekend = dayOfWeek === 5 || dayOfWeek === 6; // Saturday or Sunday

      return (
        <div
          key={index}
          className={`bg-${
            index % 3 === 0
              ? "gray"
              : index % 3 === 1
              ? isWeekend
                ? "gray"
                : "green"
              : "gray"
          }-300`}
        >
          {tasks
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
              console.log(task.id);
              return (
                <Task
                  viewType={viewType}
                  key={task.id}
                  task={task}
                  left={left}
                  width={width}
                />
              );
            })}
        </div>
      );
    });

  return (
    <div
      className="relative h-20 border border-black-300 grid"
      style={{
        gridTemplateColumns: gridTemplate,
      }}
    >
      {gridDivs}
    </div>
  );
};

export default WeeksView;
