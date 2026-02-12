import user from "../assets/user.png";
import menu from "../assets/menu.png"

export default function Header({ msg }) {
  return (
    <header className="h-14 mb-3 bg-emerald-600 text-start flex items-center justify-around">
      <img src={menu} alt="ícone de Menu" className="w-8 h-8 rounded-xl p-1" />
      {msg}
      <img src={user} alt="ícone de user" className="w-8 h-8 rounded-xl p-1" />
    </header>
  );
}
