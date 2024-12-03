import axios from "axios";

export const resourcesFetch = (url: string) =>
  axios.get(url).then((res) => {
    return res.data.map((resource: any) => {
      resource.shiftId = 1;
      return resource;
    });
  });
