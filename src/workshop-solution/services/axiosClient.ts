import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/esuca/react-onlinestore"
});

export default axiosClient;
