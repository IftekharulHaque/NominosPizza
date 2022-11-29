import axios from "axios";

export default axios.create({
  baseURL: "https://nominos-pizza.vercel.app",
  
//   withCredentials: true,
});
