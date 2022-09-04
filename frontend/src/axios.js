import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
});
// mongodb+srv://deepanshu:<password>@cluster0.datibsi.mongodb.net/?retryWrites=true&w=majority
export default instance;
