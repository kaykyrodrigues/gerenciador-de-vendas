import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userIcon from "../assets/user.png";

export default function UserMenu() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const loggedUser = JSON.parse(localStorage.getItem("user"));

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  }

  return (
    <div className="relative">
      {/* BOTÃO */}
      <button
        onClick={() => setOpen(!open)}
        className="
          
          p-2
          rounded-full
          backdrop-blur-sm
          active:scale-95
          transition
        "
      >
        <img
          src={userIcon}
          alt="Usuário"
          className="w-8 h-8"
        />
      </button>

      {/* MENU */}
      {open && (
        <>
          {/* OVERLAY */}
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          />

          {/* CARD */}
          <div
            className="
              absolute right-0 mt-3
              w-[85vw] max-w-xs
              bg-white
              rounded-3xl
              shadow-2xl
              overflow-hidden
              z-50
              animate-fadeIn
            "
          >
            {/* HEADER */}
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-5">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <img
                    src={userIcon}
                    alt="Usuário"
                    className="w-10 h-10"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-white font-semibold text-lg truncate">
                    {loggedUser?.username || "Usuário"}
                  </p>

                  <p className="text-white/80 text-sm break-all">
                    {loggedUser?.email || "Sem e-mail"}
                  </p>
                </div>
              </div>
            </div>

            {/* BOTÃO SAIR */}
            <div className="p-4">
              <button
                onClick={handleLogout}
                className="
                  w-full
                  bg-red-500
                  hover:bg-red-600
                  text-white
                  py-3
                  rounded-2xl
                  font-semibold
                  shadow-md
                  transition
                  active:scale-[0.98]
                "
              >
                Sair da conta
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}