import { useState, useEffect } from "react";
import { getSales } from "../services/SalesService";
import SaleIcon from "../assets/sale.png";

export default function Recents() {
  const [sales, setSales] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadSales() {
      try {
        const data = await getSales();
        setSales(data);
      } catch (err) {
        setError("Erro ao carregar venda");
        console.error(err);
      }
    }

    loadSales();
  }, []);

  if (error) return <p>{error}</p>;

  const reverseSales = sales.reverse();
  const recentSales = [];

  let cont = 0;

  for (let i = reverseSales.length - 1; i >= 0; i--) {
    cont = cont + 1;

    recentSales.push(reverseSales[i]);
    if (cont == 3) {
      break;
    }
  }

  return (
    <section>
      <h1 className="text-neutral-600 text-start m-3 indent-1 font-semibold">
        Vendas Recentes
      </h1>
      {recentSales.map((sale) => (
        <div
          key={sale.id}
          className="flex items-center justify-between m-3 p-1 shadow-sm"
        >
          <div className="flex items-center">
            <img
              src={SaleIcon}
              alt="Sale icon"
              className="bg-emerald-600 w-9 h-9 p-1 rounded-md"
            />
            <div className="text-sm text-left ml-1">
              <p>{sale.quantity} produtos</p>
              <p className="text-neutral-600 text-sm ">
                {sale.sale_date.split("T")[0]}
              </p>
            </div>
          </div>
          <p className="text-emerald-600 text-right font-medium">
            ${sale.total_amount}
          </p>
        </div>
      ))}
    </section>
  );
}
