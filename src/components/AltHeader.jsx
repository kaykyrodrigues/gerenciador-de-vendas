import { Link } from "react-router-dom";
import back from "../assets/back.png";

export default function AltHeader({ title }) {
  return (
    <header className="h-14 flex justify-around items-center">
      <Link to="/">
          <img
            src={back}
            alt="ícone de retorno"
            className="w-8 p-1 bg-emerald-600 rounded-lg"
          />
      </Link>
      {title}
    </header>
  );
}
