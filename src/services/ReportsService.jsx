import api from "./Api";

export async function getReports() {
  const response = await api.get("/reports/resumo");
  return response.data;
}