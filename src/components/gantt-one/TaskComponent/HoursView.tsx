import React from "react";
import { Order, Shift } from "../../../db/interface";
import { calculatePosition } from "../../../utils/task-component-utils";
import Task from "./Task";

interface HoursViewProps {
  firstDiv: number;
  secondDiv: number;
  thirdDiv: number;
  tasks: Order[];
  day: Date;
  viewType: string;
  shift: Shift;
  machineId: string;
}

const HoursView: React.FC<HoursViewProps> = ({
  firstDiv,
  secondDiv,
  thirdDiv,
  tasks,
  day,
  viewType,
  shift,
  machineId,
}) => {
  const gridTemplate = `${firstDiv}% ${secondDiv}% ${thirdDiv}%`;

  const gridDivs = [
    <div key="first" className="bg-gray-300"></div>,
    <div key="second" className="relative">
      <div className="absolute inset-0 bg-green-300"></div>
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

          return (
            <React.Fragment key={task.order + task.machineId}>
              <Task
                viewType={viewType}
                key={task.id}
                task={task}
                left={left}
                width={width}
              />
            </React.Fragment>
          );
        })}
    </div>,
    <div key="third" className="bg-gray-300"></div>,
  ];

  return (
    <div
      className="relative h-20 border border-black-300 grid"
      style={{ gridTemplateColumns: gridTemplate }}
    >
      {gridDivs}
    </div>
  );
};

export default HoursView;
