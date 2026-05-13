
import Menu from "./Menu";
import UserMenu from "./UserMenu";

export default function Header({ msg }) {
  return (
    <header className="h-14 mb-3 bg-emerald-600 text-start flex items-center justify-around">
      <Menu />
      {msg}
      <UserMenu />
    </header>
  );
}
