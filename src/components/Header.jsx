import user from "../assets/user.png";

import Menu from "./Menu";

export default function Header({ msg }) {
  return (
    <header className="h-14 mb-3 bg-emerald-600 text-start flex items-center justify-around">
      <Menu />
      {msg}
      <img src={user} alt="ícone de user" className="w-8 h-8 rounded-xl p-1" />
    </header>
  );
}
