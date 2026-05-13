import api from "./api";

export async function getSales() {
  const response = await api.get("/sales");

  return response.data;
}