import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BOTÃO HAMBURGUER */}
      <button
        onClick={() => setOpen(true)}
        className="flex flex-col justify-center gap-1 p-3 active:scale-95 transition"
      >
        <span className="w-6 h-0.5 bg-white rounded"></span>
        <span className="w-6 h-0.5 bg-white rounded"></span>
        <span className="w-6 h-0.5 bg-white rounded"></span>
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* MENU MOBILE (quase full screen) */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-xs bg-emerald-600 z-50 shadow-2xl transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="p-5 border-b border-white/20 flex justify-between items-center">
          <div>
            <p className="text-white text-sm opacity-80">Bem-vindo</p>
            <h2 className="text-white font-semibold text-lg">
              Menu
            </h2>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="text-white text-xl active:scale-90 transition"
          >
            ✕
          </button>
        </div>

        {/* LINKS */}
        <nav className="flex flex-col px-3 py-4 gap-3">

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="bg-white/10 text-white px-4 py-4 rounded-xl text-base font-medium
            active:bg-white/20 transition flex justify-between items-center"
          >
            <span>Guia de uso</span>
            <span className="opacity-70">›</span>
          </Link>
        </nav>
      </div>
    </>
  );
}