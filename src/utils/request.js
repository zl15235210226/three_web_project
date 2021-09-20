import axios  from "axios";
const instance = axios.create({
  baseURL:"http://localhost:8988/education",
  timeout:4000
})

export default instance;
