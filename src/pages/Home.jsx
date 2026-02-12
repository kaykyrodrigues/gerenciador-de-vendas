import Header from "../components/Header";
import Card from "../components/Card";
import add from "../assets/add.png";
import chart from "../assets/chart.png";
import Status from "../components/Status";
import Recents from "../components/Recents";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <section className="bg-slate-300 w-12/12 min-h-screen text-center">
      <span>
        <Header msg={<p className="text-white font-semibold">Olá, User!</p>}/>
      </span>
      <Status />
      <p className="text-neutral-600 m-2 text-sm font-medium">
        O que deseja fazer?
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        <Link to="/createsale">
          <Card src={add} alt="Icone de criação de venda" text="Criar Venda" />
        </Link>
        <Link to="/">
          <Card
            src={chart}
            alt="Icone de criação de venda"
            text="Ver Relatórios"
          />
        </Link>
      </div>
      <Recents />
      <Footer />
    </section>
  );
}
