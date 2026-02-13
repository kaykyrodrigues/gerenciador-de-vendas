import check from "../assets/check.png"
import Footer from "../components/Footer";

export default function CreatedSale() {

    return (
        <>
        <section className="bg-emerald-600 w-screen h-screen flex flex-col items-center justify-center">
            <img src={check} alt="Símbolo de checagem" className="animate-fadeIn" />
            <p className="text-white text-xl font-semibold animate-fadeIn">Venda criada!</p>
            <Footer />
        </section>
        </>
    );
}