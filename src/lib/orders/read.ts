import axios from "axios";

export const getOrders = async () => {
  const response = await axios.get("http://localhost:4000/orders");
  console.log("delivered");
  return response.data;
};
export const orderFetcher = (url: string) =>
  axios.get(url).then((res) => {
    return res.data.map((order: any) => {
      const startingDate =
        new Date(order.endHour).getTime() -
        parseFloat(order.duration) * 60 * 60 * 1000;
      order.start = new Date(startingDate).toISOString();
      order.type = "order";
      order.duration = parseFloat(order.duration) * 60 * 60 * 1000;
      return order;
    });
  });
