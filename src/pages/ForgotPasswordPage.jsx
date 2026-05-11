import { useState } from "react";
import { Link } from "react-router-dom";
import { forgotPassword } from "../services/AuthService";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await forgotPassword(email);
    alert(res.message || res.error);
  }

  return (
    <section className="min-h-screen bg-emerald-600 flex items-center justify-center px-4">
      
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-sm p-6 rounded-2xl shadow-lg"
      >
        {/* TÍTULO */}
        <h1 className="text-xl font-semibold text-center mb-3 text-emerald-600">
          Recuperar senha
        </h1>

        {/* DESCRIÇÃO */}
        <p className="text-sm text-slate-500 text-center mb-5">
          Informe seu email para receber o link de recuperação
        </p>

        {/* INPUT */}
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full mb-4 p-3 border rounded-lg text-sm focus:outline-emerald-500"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* BOTÃO */}
        <button
          className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium active:scale-95 transition"
        >
          Enviar
        </button>

        {/* VOLTAR LOGIN */}
        <p className="text-sm text-center mt-4 text-slate-600">
          Lembrou a senha?{" "}
          <Link
            to="/login"
            className="text-emerald-600 font-semibold"
          >
            Voltar para login
          </Link>
        </p>
      </form>
    </section>
  );
}