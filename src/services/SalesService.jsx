import api from "./Api";

export async function getSales() {
  const response = await api.get("/sales");
  return response.data.data;
}