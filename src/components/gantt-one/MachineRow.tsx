import React from "react";
import { Machine } from "../../db/interface";

interface MachineRowProps {
  machines: Machine[];
}

const MachineRow: React.FC<MachineRowProps> = ({ machines }) => {
  return (
    <div className="flex flex-col bg-gray-100 sticky left-0 z-10 w-40">
      {machines.map((machine, index) => (
        <div
          key={index}
          className="h-20 flex items-center justify-center border border-gray-300 p-2"
        >
          <img
            src={machine.picture}
            alt={machine.name}
            className="w-12 h-12 rounded-full border border-gray-300 object-cover"
          />
          <p className="ml-1 text-gray-800 font-semibold text-sm md:text-base tracking-wide">
            {machine.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MachineRow;
