import axios from "axios";

axios.defaults.baseURL = "http://localhost:5001/";

axios.interceptors.response.use(response => {
  console.log("succes");
  return 
})

const methods = {
  get: (url) => axios.get(url).then((response) => response.data),
  post: (url, body) => axios.post(url, body).then((response) => response.data),
  put: (url, body) => axios.put(url, body).then((response) => response.data),
  delete: (url) => axios.delete(url).then((response) => response.data),
};

const products = {
  list: () => methods.get("products"),
  details: (id) => methods.get(`products/${id}`),
};

const request = {
  products,
};

export default request;
