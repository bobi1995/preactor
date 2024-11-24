import { useState } from "react";
import TimelineComponent from "./TimelineComponent";
import ViewPicker from "./ViewPicker";
import MachineRow from "./MachineRow";
import TaskComponent from "./TaskComponent";

const machines = ["Machine A", "Machine B", "Machine C"];
const tasks = [
  {
    machine: "Machine A",
    start: "2024-11-23T08:00:00",
    end: "2024-11-23T13:00:00",
  },
  {
    machine: "Machine A",
    start: "2024-11-23T14:00:00",
    end: "2024-11-23T17:00:00",
  },
  {
    machine: "Machine B",
    start: "2024-11-23T10:00:00",
    end: "2024-11-23T12:00:00",
  },
];

const OriginalGantt = () => {
  const [viewType, setViewType] = useState<"hours" | "days" | "weeks">("hours");

  return (
    <div className="flex flex-col w-full h-screen">
      {/* View Switch Buttons */}
      <ViewPicker viewType={viewType} setViewType={setViewType} />

      {/* Timeline */}
      <TimelineComponent viewType={viewType} />

      {/* Machine rows */}
      <div className="flex flex-row h-full overflow-y-auto">
        {/* Left sticky column */}
        <MachineRow machines={machines} />

        {/* Task grid */}
        <div className="flex-1 relative">
          {machines.map((machine, rowIndex) => (
            <TaskComponent
              key={rowIndex}
              rowIndex={rowIndex}
              machine={machine}
              tasks={tasks}
              viewType={viewType}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OriginalGantt;
