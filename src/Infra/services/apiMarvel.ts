import axios from "axios";
import 'dotenv/config';

const MARVEL_API: string = process.env.MARVEL_API ?? "";

const api = axios.create({
  baseURL: MARVEL_API,
});

export default api;
