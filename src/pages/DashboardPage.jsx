import { useEffect, useState } from "react";
import AltHeader from "../components/AltHeader";
import Footer from "../components/Footer";
import api from "../services/Api";
import RevenueChart from "../components/RevenueChart";
import PaymentChart from "../components/PaymentChart";

export default function DashboardPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await api.get("/reports/resumo");

        // pega apenas o objeto data da resposta
        setData(res.data.data);

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

      {/* CARDS */}
      <div className="px-4 py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* FATURAMENTO */}
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <p className="text-sm text-slate-500">
            Faturamento Total
          </p>

          <h2 className="text-2xl font-bold text-emerald-600 mt-1">
            R$ {Number(data.faturamentoTotal).toFixed(2)}
          </h2>
        </div>

        {/* QUANTIDADE */}
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <p className="text-sm text-slate-500">
            Itens Vendidos
          </p>

          <h2 className="text-2xl font-bold text-slate-700 mt-1">
            {data.quantidadeTotal}
          </h2>
        </div>

        {/* TICKET MÉDIO */}
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <p className="text-sm text-slate-500">
            Ticket Médio
          </p>

          <h2 className="text-2xl font-bold text-amber-500 mt-1">
            R$ {Number(data.ticketMedio || 0).toFixed(2)}
          </h2>
        </div>
      </div>

      {/* GRÁFICOS */}
      <div className="px-4 pb-24">
        <RevenueChart />
        <PaymentChart />
      </div>

      <Footer />
    </section>
  );
}