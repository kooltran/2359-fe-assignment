import axios from "axios";

const targetUrl = "http://pb-api.herokuapp.com/bars";

export const barsApi = () => {
  return axios.get(targetUrl).then(res => res.data);
};
