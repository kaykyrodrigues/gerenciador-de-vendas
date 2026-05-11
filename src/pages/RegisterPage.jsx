import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../services/AuthService";

export default function RegisterPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    userpassword: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("FORM:", form);
    
    const res = await register(form);

    alert(res.message || res.error);
  }

  return (
    <section className="min-h-screen bg-emerald-600 flex items-center justify-center px-4">
      
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-sm p-6 rounded-2xl shadow-lg"
      >
        {/* TÍTULO */}
        <h1 className="text-xl font-semibold text-center mb-4 text-emerald-600">
          Criar conta
        </h1>

        {/* NOME */}
        <input
          type="text"
          placeholder="Nome"
          required
          className="w-full mb-3 p-3 border rounded-lg text-sm focus:outline-emerald-500"
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full mb-3 p-3 border rounded-lg text-sm focus:outline-emerald-500"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        {/* SENHA */}
        <input
          type="password"
          placeholder="Senha"
          required
          className="w-full mb-4 p-3 border rounded-lg text-sm focus:outline-emerald-500"
          onChange={(e) =>
            setForm({ ...form, userpassword: e.target.value })
          }
        />

        {/* BOTÃO */}
        <button
          className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium active:scale-95 transition"
        >
          Cadastrar
        </button>

        {/* VOLTAR LOGIN */}
        <p className="text-sm text-center mt-4 text-slate-600">
          Já tem conta?{" "}
          <Link
            to="/login"
            className="text-emerald-600 font-semibold"
          >
            Entrar
          </Link>
        </p>
      </form>
    </section>
  );
}