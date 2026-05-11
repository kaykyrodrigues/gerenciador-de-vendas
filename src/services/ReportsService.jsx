import api from "./Api";

export async function getReports() {
  const response = await api.get("/reports/resumo");
  return response.data;
}

export async function getFaturamentoForma() {
  const response = await api.get("/reports/faturamento-forma");
  return response.data;
}

export async function getFaturamentoTotal() {
  const response = await api.get("/reports/faturamento-total");
  return response.data;
}

export async function getQuantidadeItens() {
  const response = await api.get("/reports/quantidade-total");
  return response.data;
}