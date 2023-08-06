import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openai.com/v1/engines/text-davinci-003", // GPT-3.5 endpoint
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
});

export default api;
