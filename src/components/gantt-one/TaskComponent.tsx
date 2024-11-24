import React from "react";

interface TaskComponentProps {
  rowIndex: number;
  machine: string;
  tasks: {
    machine: string;
    start: string;
    end: string;
  }[];
  viewType: string;
}

const TaskComponent: React.FC<TaskComponentProps> = ({
  rowIndex,
  machine,
  tasks,
  viewType,
}) => {
  const calculateTimelineBounds = () => {
    if (viewType === "hours") {
      return {
        start: new Date("2024-11-23T00:00:00").getTime(),
        end: new Date("2024-11-23T23:59:59").getTime(),
      };
    } else if (viewType === "days") {
      return {
        start: new Date("2024-11-20T00:00:00").getTime(),
        end: new Date("2024-11-26T23:59:59").getTime(),
      };
    } else {
      return {
        start: new Date("2024-11-01T00:00:00").getTime(),
        end: new Date("2024-12-31T23:59:59").getTime(),
      };
    }
  };

  const calculatePosition = (start: string, end: string) => {
    const { start: timelineStart, end: timelineEnd } =
      calculateTimelineBounds();

    const startDate = new Date(start).getTime();
    const endDate = new Date(end).getTime();

    const timelineWidth = timelineEnd - timelineStart;
    const left = ((startDate - timelineStart) / timelineWidth) * 100;
    const width = ((endDate - startDate) / timelineWidth) * 100;

    return { left: `${left}%`, width: `${width}%` };
  };
  return (
    <div key={rowIndex} className="relative h-20 border border-gray-300">
      {tasks
        .filter((task) => task.machine === machine)
        .map((task, index) => {
          const { left, width } = calculatePosition(task.start, task.end);
          return (
            <div
              key={index}
              className="absolute h-16 bg-blue-500 text-white text-sm flex items-center justify-center rounded"
              style={{ left, width }}
            >
              {new Date(task.start).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              -{" "}
              {new Date(task.end).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          );
        })}
    </div>
  );
};

export default TaskComponent;
