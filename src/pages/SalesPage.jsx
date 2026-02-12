import { useEffect, useState } from "react";
import { getSales } from "../services/SalesService";

export default function SalesPage() {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadSales() {
      try {
        const data = await getSales();
        setSales(data);
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

  return (
    <div>
      <h1>Vendas</h1>

      {sales.map((sale) => (
        <div key={sale.id} className="bg-slate-300 m-1 p-2">
          <p>ID: {sale.id}</p>  
          <p>Data: {sale.sale_date}</p>
          <p>Cash: {sale.cash_amount}</p>
          <p>Pix: {sale.pix_amount}</p>
          <p>Credit: {sale.credit_amount}</p>
          <p>Total: {sale.total_amount}</p>
          <p>Note: {sale.notes}</p>
          <p>Created: {sale.created_at}</p>
        </div>
      ))}
    </div>
  );
}