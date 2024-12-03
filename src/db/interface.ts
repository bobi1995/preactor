export interface Machine {
  id: string;
  name: string;
  type: string;
  status: string;
  startHour: string;
  endHour: string;
  picture: string;
  shiftId: number;
}
export interface Order {
  machineId: string;
  start: string;
  endHour: string;
  order: string;
  sales: string;
  duration: number;
  id: number;
  type: "order" | "readjustment" | "maintenance";
}
export interface Shift {
  id: number;
  startHour: string;
  endHour: string;
  duration: number;
  breaks: {
    startHour: string;
    endHour: string;
    name: string;
  }[];
}
