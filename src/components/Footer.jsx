import { Link, useLocation } from "react-router-dom";
import home from "../assets/home.png";
import cash from "../assets/cash.png";
import chart from "../assets/chart.png";
import add from "../assets/add.png";

export default function Footer() {
  const location = useLocation();

  const links = [
    { to: "/sales", icon: cash, alt: "Página de vendas" },
    { to: "/createsale", icon: add, alt: "Criar venda" },
    { to: "/", icon: home, alt: "Página Home" },
    { to: "/reports", icon: chart, alt: "Página de relatórios" },
  ];
  
  const filteredLinks = links.filter(
    (link) => link.to !== location.pathname
  );

  return (
    <footer className="flex justify-center items-center mb-3 h-14 fixed bottom-0 left-0 w-full z-50">
      
      <div className="flex justify-evenly items-center gap-3 bg-white rounded-xl w-11/12 p-2 shadow-lg">

        {filteredLinks.map((link) => (
          <Link key={link.to} to={link.to}>
            <img
              src={link.icon}
              alt={link.alt}
              className="bg-emerald-600 rounded-xl w-9 h-9 p-1 active:scale-90 transition"
            />
          </Link>
        ))}

      </div>

    </footer>
  );
}