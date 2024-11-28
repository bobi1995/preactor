import React from "react";
import { Machine, Order } from "../../db/interface";
import { convertTimeToDecimal, shifts } from "../../db/shifts";
import DaysView from "./TaskComponent/DaysView";
import HoursView from "./TaskComponent/HoursView";
import WeeksView from "./TaskComponent/WeeksView";

interface TaskComponentProps {
  rowIndex: number;
  machine: Machine;
  tasks: Order[];
  viewType: "hours" | "days" | "weeks";
}

const day = new Date();

const TaskComponent: React.FC<TaskComponentProps> = ({
  rowIndex,
  machine,
  tasks,
  viewType,
}) => {
  let gridTemplate = "";
  let gridDivs: JSX.Element[] = [];
  const shift = shifts.find((shift) => shift.id === machine.shiftId);
  if (!shift) {
    return null;
  }
  const firstDiv = (convertTimeToDecimal(shift.startHour) / 24) * 100;
  const secondDiv = (shift.duration / 24) * 100;
  const thirdDiv = 100 - (firstDiv + secondDiv);
  if (viewType === "hours") {
    return (
      <HoursView
        firstDiv={firstDiv}
        secondDiv={secondDiv}
        thirdDiv={thirdDiv}
        tasks={tasks}
        day={day}
        viewType={viewType}
        shift={shift}
        machineId={machine.id}
      />
    );
  } else if (viewType === "days") {
    return (
      <DaysView
        firstDiv={firstDiv}
        secondDiv={secondDiv}
        thirdDiv={thirdDiv}
        tasks={tasks}
        day={day}
        viewType={viewType}
        shift={shift}
        machineId={machine.id}
      />
    );
  } else if (viewType === "weeks") {
    return (
      <WeeksView
        firstDiv={firstDiv}
        secondDiv={secondDiv}
        thirdDiv={thirdDiv}
        tasks={tasks}
        day={day}
        viewType={viewType}
        shift={shift}
        machineId={machine.id}
      />
    );
  }
};

export default TaskComponent;
