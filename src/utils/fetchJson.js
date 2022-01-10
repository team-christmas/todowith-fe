import axios from "axios";

const FetchConsts = {
  GET: "get",
  POST: "post",
  PATCH: "patch",
  PUT: "put",
  DELETE: "delete",
};

const axiosInstance = axios.create({timeout: 6000});

const request = async (method, url, data = {}) => {
  try {
    const config = {url, method, data};
    const result = await axiosInstance(config);
    return result.data;
  } catch (e) {
    console.error(`error!!! from: fetchJson, url :${url}, error: ${e}`);
  }
};

export const fetchJson = {
  get: (url, data) => request(FetchConsts.GET, url, data),
  post: (url, data) => request(FetchConsts.POST, url, data),
  patch: (url, data) => request(FetchConsts.PATCH, url, data),
  put: (url, data) => request(FetchConsts.PUT, url, data),
  delete: (url, data) => request(FetchConsts.DELETE, url, data),
};