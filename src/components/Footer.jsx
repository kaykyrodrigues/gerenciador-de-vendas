import { Link } from "react-router-dom";
import home from "../assets/home.png";
import cash from "../assets/cash.png"

export default function Footer() {
  return (
    <footer className="flex justify-evenly items-center mb-3 h-12 fixed bottom-0 left-0 w-full">
      <div className="flex justify-center gap-2 bg-white rounded-md w-7/12 p-1 shadow-md">
        <Link to="/">
          <img
            src={home}
            alt="ícone da página Home"
            className="bg-emerald-600 rounded-xl w-8 h-8 p-1"
          />
        </Link>
        <img
          src={cash}
          alt="ícone da página de vendas"
          className="bg-emerald-600 rounded-xl w-8 h-8 p-1"
        />
      </div>
    </footer>
  );
}
