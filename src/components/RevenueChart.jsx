import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useEffect, useState } from "react";
import api from "../services/Api";

export default function RevenueChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function loadChart() {
      try {
        const res = await api.get("/reports/vendas-dia");

        setChartData(res.data.data);

      } catch (err) {
        console.error(err);
      }
    }

    loadChart();
  }, []);

  return (
    <div className="bg-white rounded-2xl p-4 shadow-md">
      <h2 className="text-lg font-semibold text-slate-700 mb-4">
        Faturamento Diário
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="sale_date" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="total"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}