import React from "react";
import { Order, Shift } from "../../../db/interface";
import { calculatePosition } from "../../../utils/task-component-utils";
import Task from "./Task";

interface DaysViewProps {
  firstDiv: number;
  secondDiv: number;
  thirdDiv: number;
  tasks: Order[];
  day: Date;
  viewType: string;
  shift: Shift;
  machineId: string;
}

const DaysView: React.FC<DaysViewProps> = ({
  firstDiv,
  secondDiv,
  thirdDiv,
  tasks,
  day,
  viewType,
  shift,
  machineId,
}) => {
  const numDays = 7;
  const sectionsPerDay = 3;
  const column1 = firstDiv / numDays;
  const column2 = secondDiv / numDays;
  const column3 = thirdDiv / numDays;
  const gridTemplate = Array(numDays)
    .fill(`${column1}% ${column2}% ${column3}%`)
    .join(" ");

  const gridDivs = Array(numDays * sectionsPerDay)
    .fill(null)
    .map((_, index) => (
      <div
        key={index}
        className={`bg-${
          index % 3 === 0 ? "gray" : index % 3 === 1 ? "green" : "gray"
        }-300`}
      >
        {tasks
          .filter((task) => task.machineId === machineId)
          .map((task) => {
            const position = calculatePosition(
              task.start,
              task.endHour,
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
    ));

  return (
    <div
      className="relative h-20 border border-black-300 grid"
      style={{ gridTemplateColumns: gridTemplate }}
    >
      {gridDivs}
    </div>
  );
};

export default DaysView;
