import axios from "axios";

// Spring Boot (Exam data)
export const springAPI = axios.create({
  baseURL: "http://localhost:8080/api",
});

// FastAPI (Processing)
export const pythonAPI = axios.create({
  baseURL: "http://localhost:8000",
});