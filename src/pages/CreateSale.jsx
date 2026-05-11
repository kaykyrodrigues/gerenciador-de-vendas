import AltHeader from "../components/AltHeader";
import Footer from "../components/Footer";
import SaleForm from "../components/SaleForm";

export default function CreateSale() {
  return (
      <section className="bg-emerald-600 h-screen">
        <AltHeader
          title={
            <h1 className="text-white text-base font-semibold">
              Registro de Venda
            </h1>
          }
        />
        <SaleForm />
        <Footer />
      </section>
  );
}
