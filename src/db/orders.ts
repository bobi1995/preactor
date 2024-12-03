import { Order } from "./interface";

const orders: Order[] = [
  {
    id: 1,
    machineId: "WSNS01", // TruLaser 3030
    start: "2024-12-02T08:01:00",
    endHour: "2024-12-02T10:22:00",
    duration: 8160000,
    order: "SFC130006",
    sales: "SLS005758",
    type: "order",
  },
  {
    id: 2,
    machineId: "WSNS02", // TruLaser 3040
    start: "2024-12-02T11:00:00",
    endHour: "2024-12-02T14:30:00",
    duration: 12600000,
    order: "SFC130007",
    sales: "SLS005759",
    type: "order",
  },

  {
    id: 4,
    machineId: "WSNS02", // TruLaser 3040
    start: "2024-12-02T06:01:00",
    endHour: "2024-12-02T09:15:00",
    duration: 16440000,
    order: "SFC130002",
    sales: "SLS005759",
    type: "order",
  },

  {
    id: 6,
    machineId: "WSNS03", // TruLaser 3060
    start: "2024-12-02T12:30:00",
    endHour: "2024-12-02T16:27:00",
    duration: 14400000,
    order: "SFC130003",
    sales: "SLS005758",
    type: "order",
  },
  {
    id: 9,
    machineId: "WSBD05", // TruBend 7036
    start: "2024-12-02T08:00:00",
    endHour: "2024-12-02T12:30:00",
    duration: 16200000,
    order: "SFC130005",
    sales: "SLS005758",
    type: "order",
  },
  {
    id: 15,
    machineId: "WSNS02", // TruLaser 3040
    start: "2024-12-02T09:30:00",
    endHour: "2024-12-02T10:45:00",
    duration: 450000,
    order: "SFC130015",
    sales: "N/A",
    type: "order",
  },
  {
    id: 16,
    machineId: "WSNS02", // TruLaser 3030
    start: "2024-12-02T10:46:00",
    endHour: "2024-12-02T11:00:00",
    duration: 900000,
    order: "",
    sales: "",
    type: "readjustment",
  },
  {
    id: 16,
    machineId: "WSNS02", // TruLaser 3030
    start: "2024-12-02T09:16:00",
    endHour: "2024-12-02T09:29:00",
    duration: 900000,
    order: "",
    sales: "",
    type: "readjustment",
  },
  {
    id: 17,
    machineId: "WSNS03", // TruLaser 3060
    start: "2024-12-02T08:01:00",
    endHour: "2024-12-02T12:00:00",
    duration: 3600000,
    order: "",
    sales: "",
    type: "maintenance",
  },
  {
    id: 18,
    machineId: "WSNS01", // TruLaser 3030
    start: "2024-12-02T10:25:00",
    endHour: "2024-12-02T16:29:00",
    duration: 10800000,
    order: "SFC130016",
    sales: "SLS005759",
    type: "order",
  },
  //12-03
  {
    id: 19,
    machineId: "WSNS01",
    start: "2024-12-03T08:00:00",
    endHour: "2024-12-03T10:30:00",
    duration: 9000000,
    order: "SFC140001",
    sales: "SLS005760",
    type: "order",
  },
  {
    id: 20,
    machineId: "WSNS02",
    start: "2024-12-03T08:15:00",
    endHour: "2024-12-03T11:45:00",
    duration: 12600000,
    order: "SFC140002",
    sales: "SLS005761",
    type: "order",
  },
  {
    id: 21,
    machineId: "WSBD05",
    start: "2024-12-03T13:00:00",
    endHour: "2024-12-03T16:00:00",
    duration: 10800000,
    order: "SFC140003",
    sales: "SLS005762",
    type: "order",
  },
  {
    id: 22,
    machineId: "WSNS03",
    start: "2024-12-03T08:30:00",
    endHour: "2024-12-03T14:00:00",
    duration: 19800000,
    order: "SFC140004",
    sales: "SLS005763",
    type: "order",
  },
  {
    id: 23,
    machineId: "WSNS01",
    start: "2024-12-03T14:00:00",
    endHour: "2024-12-03T16:30:00",
    duration: 9000000,
    order: "SFC144005",
    sales: "SLS005764",
    type: "order",
  },
  // 12-04 Orders
  {
    id: 24,
    machineId: "WSNS01",
    start: "2024-12-04T08:15:00",
    endHour: "2024-12-04T12:45:00",
    duration: 16200000,
    order: "SFC140005",
    sales: "SLS005764",
    type: "order",
  },
  {
    id: 25,
    machineId: "WSNS02",
    start: "2024-12-04T10:00:00",
    endHour: "2024-12-04T12:45:00",
    duration: 9900000,
    order: "SFC140006",
    sales: "SLS005765",
    type: "order",
  },
  {
    id: 26,
    machineId: "WSNS03",
    start: "2024-12-04T13:30:00",
    endHour: "2024-12-04T16:00:00",
    duration: 9000000,
    order: "",
    sales: "",
    type: "maintenance",
  },
  {
    id: 27,
    machineId: "WSBD05",
    start: "2024-12-04T07:45:00",
    endHour: "2024-12-04T10:30:00",
    duration: 9900000,
    order: "SFC140007",
    sales: "SLS005766",
    type: "order",
  },
  {
    id: 28,
    machineId: "WSNS02",
    start: "2024-12-04T11:30:00",
    endHour: "2024-12-04T14:30:00",
    duration: 10800000,
    order: "SFC140008",
    sales: "SLS005767",
    type: "order",
  },
  {
    id: 29,
    machineId: "WSNS01", // TruLaser 3030
    start: "2024-12-05T08:30:00",
    endHour: "2024-12-05T11:45:00",
    duration: 11700000,
    order: "SFC150001",
    sales: "SLS005768",
    type: "order",
  },
  {
    id: 30,
    machineId: "WSNS02", // TruLaser 3040
    start: "2024-12-05T10:00:00",
    endHour: "2024-12-05T13:30:00",
    duration: 12600000,
    order: "SFC150002",
    sales: "SLS005769",
    type: "order",
  },
  {
    id: 31,
    machineId: "WSBD05", // TruBend 7036
    start: "2024-12-05T08:15:00",
    endHour: "2024-12-05T10:45:00",
    duration: 9000000,
    order: "SFC150003",
    sales: "SLS005770",
    type: "order",
  },
  {
    id: 32,
    machineId: "WSNS03", // TruLaser 3060
    start: "2024-12-05T12:00:00",
    endHour: "2024-12-05T15:45:00",
    duration: 13500000,
    order: "SFC150004",
    sales: "SLS005771",
    type: "order",
  },
  {
    id: 33,
    machineId: "WSNS01", // TruLaser 3030
    start: "2024-12-05T15:45:00",
    endHour: "2024-12-05T16:30:00",
    duration: 2700000,
    order: "",
    sales: "",
    type: "readjustment",
  },

  // 12-06 Orders
  {
    id: 34,
    machineId: "WSNS02", // TruLaser 3040
    start: "2024-12-06T06:00:00",
    endHour: "2024-12-06T09:00:00",
    duration: 10800000,
    order: "SFC160001",
    sales: "SLS005772",
    type: "order",
  },
  {
    id: 35,
    machineId: "WSNS03", // TruLaser 3060
    start: "2024-12-06T09:15:00",
    endHour: "2024-12-06T12:45:00",
    duration: 12600000,
    order: "SFC160002",
    sales: "SLS005773",
    type: "order",
  },
  {
    id: 36,
    machineId: "WSBD05", // TruBend 7036
    start: "2024-12-06T07:30:00",
    endHour: "2024-12-06T11:00:00",
    duration: 12600000,
    order: "SFC160003",
    sales: "SLS005774",
    type: "order",
  },
  {
    id: 37,
    machineId: "WSNS01", // TruLaser 3030
    start: "2024-12-06T12:00:00",
    endHour: "2024-12-06T16:30:00",
    duration: 16200000,
    order: "SFC160004",
    sales: "SLS005775",
    type: "order",
  },
  {
    id: 38,
    machineId: "WSNS02", // TruLaser 3040
    start: "2024-12-06T09:30:00",
    endHour: "2024-12-06T13:15:00",
    duration: 13500000,
    order: "",
    sales: "",
    type: "maintenance",
  },
];

export default orders;
