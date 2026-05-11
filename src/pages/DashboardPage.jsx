import { useEffect, useState } from "react";
import AltHeader from "../components/AltHeader";
import Footer from "../components/Footer";
import api from "../services/api";

export default function DashboardPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await api.get("/reports/resumo");
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    load();
  }, []);

  if (!data) {
    return (
      <section className="min-h-screen bg-emerald-600 flex items-center justify-center text-white">
        Carregando...
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-emerald-600 flex flex-col">
      <AltHeader
        title={
          <h1 className="text-white font-semibold text-xl">
            Dashboard
          </h1>
        }
      />

      {/* CONTEÚDO */}
      <div className="flex-1 px-4 py-4 space-y-4 pb-24">
        
        {/* FATURAMENTO */}
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <p className="text-sm text-slate-500">Faturamento Total</p>
          <h2 className="text-2xl font-bold text-emerald-600 mt-1">
            R$ {data.total}
          </h2>
        </div>

        {/* QUANTIDADE */}
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <p className="text-sm text-slate-500">Itens Vendidos</p>
          <h2 className="text-2xl font-bold text-slate-700 mt-1">
            {data.quantidade}
          </h2>
        </div>

      </div>

      <Footer />
    </section>
  );
}