import axios from "axios";
import { saveAs } from "file-saver";

const API_URL = "http://127.0.0.1:8000";

// Fetch exam by code or name
export const fetchExam = async (query: string) => {
  const res = await axios.get(`${API_URL}/exam/${encodeURIComponent(query)}`);
  return res.data; 
};

// Process documents and download ZIP
export const processDocuments = async (examName: string, files: { [key: string]: File }) => {
  const formData = new FormData();
  Object.entries(files).forEach(([key, file]) => {
    if (file) formData.append(key, file);
  });

  const res = await axios.post(
    `${API_URL}/process/${encodeURIComponent(examName)}`,
    formData,
    { responseType: "blob" }
  );

  saveAs(res.data, "processed_docs.zip");
};
