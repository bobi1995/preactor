import React from "react";
import { Order } from "../../../db/interface";
import clsx from "clsx";
interface TaskProps {
  task: Order;
  left: string;
  width: string;
  viewType: string;
}
const Task: React.FC<TaskProps> = ({ task, left, width }) => {
  return (
    <div
      key={task.id}
      className={clsx(
        "absolute h-16  text-white text-sm flex flex-col rounded justify-center mt-2 items-center",
        { "bg-blue-500": task.type === "order" },
        { "bg-red-300": task.type === "readjustment" },
        { "bg-red-700": task.type === "maintenance" }
      )}
      style={{ left, width }}
    >
      {parseFloat(width) >= 10 && (
        <>
          <p>{task.order}</p>
          <p>{task.sales}</p>
        </>
      )}
    </div>
  );
};

export default Task;
