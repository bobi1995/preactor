import { useState } from "react";
import TimelineComponent from "./TimelineComponent";
import ViewPicker from "./ViewPicker";
import MachineRow from "./MachineRow";
import TaskComponent from "./TaskComponent";
import machines from "../../db/machines";
import orders from "../../db/orders";

const OriginalGantt = () => {
  const [viewType, setViewType] = useState<"hours" | "days" | "weeks">("hours");

  // Calculate the date range for the selected viewType
  const getDateRange = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Midnight today

    if (viewType === "hours") {
      // Show today's range (midnight to 11:59 PM)
      const start = today.getTime();
      const end = new Date(today).setHours(23, 59, 59, 999);
      return { start, end };
    } else if (viewType === "days") {
      // Show the current week (starting from today)
      const start = today.getTime();
      const end = new Date(today).setDate(today.getDate() + 7); // 7 days ahead
      return { start, end };
    } else {
      // Show the current month (starting from today)
      const start = today.getTime();
      const end = new Date(today).setDate(today.getDate() + 30); // 30 days ahead
      return { start, end };
    }
  };

  // Filter orders based on the current date range
  const filteredOrders = orders.filter((order) => {
    const { start, end } = getDateRange();
    const orderStart = new Date(order.start).getTime();
    const orderEnd = new Date(order.end).getTime();

    // Include orders that start before the range but end within the range
    // Include orders that start within the range and end after the range
    // Include orders that start and end within the range
    return (
      (orderStart >= start && orderStart <= end) || // order starts within the range
      (orderEnd >= start && orderEnd <= end) || // order ends within the range
      (orderStart <= start && orderEnd >= end) // order spans the range
    );
  });

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
              tasks={filteredOrders}
              viewType={viewType}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OriginalGantt;
