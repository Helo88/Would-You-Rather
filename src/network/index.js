import axios from "axios";
//import store from "../store/index"

// import { setLoading } from './../store/actions/loading';

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org",
});