import { api } from "src/boot/axios";

export const getPing = () => api.get("/ping")