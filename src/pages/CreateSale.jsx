import AltHeader from "../components/AltHeader";
import Footer from "../components/Footer";
import SaleForm from "../components/SaleForm";

export default function CreateSale() {
  return (
    <>
      <AltHeader
        title={
          <h1 className="text-neutral-600 text-base font-bold">
            Registro de Venda
          </h1>
        }
      />
      <SaleForm />
    </>
  );
}
