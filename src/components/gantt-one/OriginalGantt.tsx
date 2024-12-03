import { useState } from "react";
import TimelineComponent from "./TimelineComponent";
import ViewPicker from "./ViewPicker";
import MachineRow from "./MachineRow";
import TaskComponent from "./TaskComponent";
import machines from "../../db/machines";
// import useSWR from "swr";
// import { orderFetcher } from "../../lib/orders/read";
import { Order } from "../../db/interface";
//import { resourcesFetch } from "../../lib/resources/read";
import orders from "../../db/orders";

const day = new Date();

const OriginalGantt = () => {
  const [viewType, setViewType] = useState<"hours" | "days" | "weeks">("hours");
  // const { data, error } = useSWR("http://localhost:4000/orders", orderFetcher);
  // const { data: resources, error: err_res } = useSWR(
  //   "http://localhost:4000/resources",
  //   resourcesFetch
  // );
  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  // if (!resources) {
  //   return <div>Loading...</div>;
  // }

  // Calculate the date range for the selected viewType
  const getDateRange = () => {
    day.setHours(0, 0, 0, 0); // Midnight today

    if (viewType === "hours") {
      // Show today's range (midnight to 11:59 PM)
      const start = day.getTime();
      const end = new Date(day).setHours(23, 59, 59, 999);
      return { start, end };
    } else if (viewType === "days") {
      // Show the current week (starting from today)
      const start = day.getTime();
      const end = new Date(day).setDate(day.getDate() + 7); // 7 days ahead
      return { start, end };
    } else {
      // Show the current month (starting from today)
      const start = day.getTime();
      const end = new Date(day).setDate(day.getDate() + 30); // 30 days ahead
      return { start, end };
    }
  };

  // Filter orders based on the current date range
  const filteredOrders = orders.filter((order: Order) => {
    const { start, end } = getDateRange();
    const orderStart = new Date(order.start).getTime();
    const orderEnd = new Date(order.endHour).getTime();

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
      <TimelineComponent viewType={viewType} day={day} />

      {/* Machine rows */}
      <div className="flex flex-row h-full overflow-y-auto">
        {/* Left sticky column */}
        <MachineRow machines={machines} />

        {/* Task grid */}
        <div className="flex-1 relative">
          {machines.map((machine: any, rowIndex: number) => (
            <TaskComponent
              key={rowIndex}
              rowIndex={rowIndex}
              machine={machine}
              tasks={filteredOrders}
              viewType={viewType}
              day={day}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OriginalGantt;
