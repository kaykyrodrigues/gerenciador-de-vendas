import api from "./api";

export async function register(data) {
  const response = await api.post("/auth/register", data);

  return response.data;
}

export async function login(data) {
  const response = await api.post("/auth/login", data, {
    withCredentials: true,
  });

  return response.data;
}

export async function verifyEmail(token) {
  const response = await api.get(`/auth/verify?token=${token}`);

  return response.data;
}

export async function forgotPassword(email) {
  const response = await api.post("/auth/forgot-password", {
    email,
  });

  return response.data;
}

export async function resetPassword(data) {
  const response = await api.post("/auth/reset-password", data);

  return response.data;
}