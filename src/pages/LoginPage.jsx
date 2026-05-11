import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/AuthService";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [userpassword, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    
    const res = await login({
      email,
      userpassword,
    });
    
    console.log(res);
    if (res.token) {
      localStorage.setItem("token", res.token);

      console.log(localStorage.getItem("token"))

      navigate("/");
    } else {
      alert(res.error);
    }
  }

  return (
    <section className="min-h-screen bg-emerald-600 flex items-center justify-center px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white w-full max-w-sm p-6 rounded-2xl shadow-lg"
      >
        <h1 className="text-xl font-semibold text-center mb-5 text-emerald-600">
          Entrar
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-3 border rounded-lg text-sm focus:outline-emerald-500"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full mb-2 p-3 border rounded-lg text-sm focus:outline-emerald-500"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="text-right mb-4">
          <Link
            to="/forgot-password"
            className="text-xs text-emerald-600 font-medium"
          >
            Esqueceu a senha?
          </Link>
        </div>

        <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium active:scale-95 transition">
          Entrar
        </button>

        <p className="text-sm text-center mt-4 text-slate-600">
          Não tem conta?{" "}
          <Link
            to="/register"
            className="text-emerald-600 font-semibold"
          >
            Criar conta
          </Link>
        </p>
      </form>
    </section>
  );
}