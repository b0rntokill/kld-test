import axios from "axios";

const BACKEND_URL = "https://test-job.pixli.app";
const REQUEST_TIMEOUT = 5000;

export const api = axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
});
