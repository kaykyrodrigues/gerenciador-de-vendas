import { useEffect, useState } from "react";
import { getSales } from "../services/SalesService";
import AltHeader from "../components/AltHeader";
import Footer from "../components/Footer";

export default function SalesPage() {
  const [sales, setSales] = useState([]);
  const [filter, setFilter] = useState("all");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadSales() {
      try {
        const data = await getSales();
        setSales(data.data);
      } catch (err) {
        setError("Erro ao carregar vendas", err);
      } finally {
        setLoading(false);
      }
    }

    loadSales();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  const filteredSales = sales
    .filter((sale) => {
      if (filter === "all") return true;

      const now = new Date();
      const createdAt = new Date(sale.created_at);

      const diffTime = now - createdAt;
      const diffDays = diffTime / (1000 * 60 * 60 * 24);

      return diffDays <= filter;
    })

    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  return (
    <section className="min-h-screen bg-emerald-600 flex flex-col">
      <AltHeader
        title={
          <h1 className="text-white font-semibold text-xl">
            Vendas Registradas
          </h1>
        }
      />

      <div className="flex justify-center gap-3 px-4 mt-4 mb-3">

        <button
          onClick={() => setFilter("all")}
          className={`text-sm px-4 rounded-md font-medium transition
          ${filter === "all"
            ? "bg-white text-emerald-600"
            : "bg-white/20 text-white"}`}
        >
          Todas
        </button>

        <button
          onClick={() => setFilter(1)}
          className={`text-sm px-4 py-2 rounded-full font-medium transition
          ${filter === 1
            ? "bg-white text-emerald-600"
            : "bg-white/20 text-white"}`}
        >
          1 dia
        </button>

        <button
          onClick={() => setFilter(7)}
          className={`text-sm px-4 py-2 rounded-full font-medium transition
          ${filter === 7
            ? "bg-white text-emerald-600"
            : "bg-white/20 text-white"}`}
        >
          7 dias
        </button>

        <button
          onClick={() => setFilter(30)}
          className={`text-sm px-4 py-2 rounded-full font-medium transition
          ${filter === 30
            ? "bg-white text-emerald-600"
            : "bg-white/20 text-white"}`}
        >
          30 dias
        </button>

      </div>

      <div className="flex-1 px-3 pb-20 space-y-3">

        {filteredSales.map((sale) => (
          <div
            key={sale.id}
            className="bg-slate-100 rounded-xl p-4 shadow-md"
          >
            <p className="text-xs text-slate-500 break-all mb-2">
              ID: {sale.id}
            </p>

            <div className="flex justify-between text-sm mb-3">
              <span className="font-medium text-slate-600">
                Data da venda
              </span>
              <span>{sale.sale_date.split("T")[0]}</span>
            </div>

            <div className="space-y-1 text-sm">

              <div className="flex justify-between">
                <span className="text-slate-600">Cash</span>
                <span className="font-medium">
                  R$ {sale.cash_amount}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-600">Pix</span>
                <span className="font-medium">
                  R$ {sale.pix_amount}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-600">Card</span>
                <span className="font-medium">
                  R$ {sale.card_amount}
                </span>
              </div>

            </div>

            <div className="border-t border-slate-300 mt-3 pt-3 flex justify-between">
              <span className="font-semibold text-slate-700">
                Total
              </span>
              <span className="font-bold text-emerald-600">
                R$ {sale.total_amount}
              </span>
            </div>
            
            <p className="text-xs text-slate-400 mt-2 text-right">
              Registrado em: {sale.created_at.split("T")[0]}
            </p>

          </div>
        ))}

      </div>

      <Footer />
    </section>
  );
}