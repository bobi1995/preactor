import React from "react";

interface MachineRowProps {
  machines: string[];
}

const MachineRow: React.FC<MachineRowProps> = ({ machines }) => {
  return (
    <div className="flex flex-col w-32 bg-gray-100 sticky left-0 z-10">
      {machines.map((machine, index) => (
        <div
          key={index}
          className="h-20 flex items-center justify-center border border-gray-300"
        >
          {machine}
        </div>
      ))}
    </div>
  );
};

export default MachineRow;
