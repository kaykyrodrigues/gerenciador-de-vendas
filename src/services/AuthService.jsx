import axios from "axios";

const API_URL = "http://localhost:3036/auth";

export async function register(data) {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function login(data) {
  const response = await axios.post(`${API_URL}/login`, data, {
    withCredentials: true,
  });

  console.log(response.data);

  return response.data;
}

export async function verifyEmail(token) {
  const res = await fetch(`${API_URL}/verify?token=${token}`);
  return res.json();
}

export async function forgotPassword(email) {
  const res = await fetch(`${API_URL}/forgot-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  return res.json();
}

export async function resetPassword(data) {
  const res = await fetch(`${API_URL}/reset-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}
