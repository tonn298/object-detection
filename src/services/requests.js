import axios from "axios";

import { endpoint, baseUrl, apiKey } from "./config";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: apiKey,
    "Content-Type": "application/json",
  },
});

export const objectDetectionRequest = async (param) => {
  const data = await axiosInstance
    .post(endpoint, {
      raw_data: param,
    })
    .then((response) => {
      const result = response.data;
      return result;
    })
    .catch((e) => console.log(e));
  return data;
};
