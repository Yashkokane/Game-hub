import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2dff189f4cbf4eed835d62d80421e61b",
  },
});