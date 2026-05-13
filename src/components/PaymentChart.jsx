import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

import { useEffect, useState } from "react";
import api from "../services/api";

const COLORS = [
  "#22c55e", // PIX → verde
  "#3b82f6", // Cartão → azul
  "#f59e0b", // Dinheiro → amarelo
];

export default function PaymentChart() {

  const [data, setData] = useState([
    { name: "PIX", value: 0 },
    { name: "Cartão", value: 0 },
    { name: "Dinheiro", value: 0 },
  ]);

  useEffect(() => {

    async function loadData() {

      try {

        const res = await api.get("/reports/resumo");

        const report = res.data?.data;

        const formas =
          report?.faturamentoForma || {};

        setData([
          {
            name: "PIX",
            value: Number(formas.pix) || 0,
          },
          {
            name: "Cartão",
            value: Number(formas.card) || 0,
          },
          {
            name: "Dinheiro",
            value: Number(formas.cash) || 0,
          },
        ]);

      } catch (err) {

        console.error(
          "ERRO PAYMENT CHART:",
          err
        );
      }
    }

    loadData();

  }, []);

  return (
    <div className="bg-white rounded-2xl p-4 shadow-md mt-4">

      <h2 className="text-lg font-semibold text-slate-700 mb-4">
        Formas de Pagamento
      </h2>

      <ResponsiveContainer width="100%" height={320}>

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >

            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}

          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}