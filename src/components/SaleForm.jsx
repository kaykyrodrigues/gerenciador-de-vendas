import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SaleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3036/sales", {
        sale_date: data["sale-date"],
        cash_amount: Number(data["cash-amount"]),
        pix_amount: Number(data["pix-amount"]),
        card_amount: Number(data["card-amount"]),
        quantity: Number(data["quantity"]),
      });

      console.log("Venda criada com sucesso", response.data);
      alert("Venda criada com sucesso");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <h1 className="m-1 text-center text-neutral-600 text-xl font-bold">
        Registro de Venda
      </h1>
      <form
        className="m-auto p-2 max-w-72 bg-slate-200 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col m-2 ">
          <label className="mb-2">Data da Venda</label>
          <input
            id="sale-date"
            type="date"
            {...register("sale-date", {
              required: "A data da venda é obrigatória",
              validate: (value) => {
                const todayDate = new Date().toISOString().split("T")[0];
                return (
                  value <= todayDate || "A data não pode ser maior que a atual"
                );
              },
            })}
            className="rounded-sm text-center text-neutral-600 border-neutral-600 "
          />
          {errors["sale-date"] && (
            <p className="text-red-500 text-sm">
              {errors["sale-date"].message}
            </p>
          )}
        </div>
        <div className="flex flex-col m-2">
          <label className="mb-2">Ganhos em Espécie</label>
          <input
            id="cash-amount"
            type="number"
            {...register("cash-amount", {
              required: "O campo não pode estar vazio",
              validate: (value) => {
                if (value < 0) return "O valor precisa ser maior ou igual a  0";
              },
            })}
            placeholder="Digite o valor obtido em espécie..."
            className="rounded-sm text-start text-xs border-neutral-600 outline-slate-400 p-2 h-9"
          />
          {errors["cash-amount"] && (
            <p className="text-red-500 text-sm">
              {errors["cash-amount"].message}
            </p>
          )}
        </div>
        <div className="flex flex-col m-2">
          <label className="mb-2">Ganhos em Pix</label>
          <input
            id="pix-amount"
            type="number"
            {...register("pix-amount", {
              required: "O campo não pode estar vazio",
              validate: (value) => {
                if (value < 0) return "O valor precisa ser maior ou igual a  0";
              },
            })}
            placeholder="Digite o valor obtido com o PIX..."
            className="rounded-sm text-start text-xs border-neutral-600 outline-slate-400 p-2 h-9"
          />
          {errors["pix-amount"] && (
            <p className="text-red-500 text-sm">
              {errors["pix-amount"].message}
            </p>
          )}
        </div>
        <div className="flex flex-col m-2">
          <label className="mb-2">Ganhos em Cartão</label>
          <input
            id="card-amount"
            type="number"
            {...register("card-amount", {
              required: "O campo não pode estar vazio",
              validate: (value) => {
                if (value < 0) return "O valor precisa ser maior ou igual a  0";
              },
            })}
            placeholder="Digite o valor obtido com cartões..."
            className="rrounded-sm text-start text-xs border-neutral-600 outline-slate-400 p-2 h-9"
          />
          {errors["card-amount"] && (
            <p className="text-red-500 text-sm">
              {errors["card-amount"].message}
            </p>
          )}
        </div>
        <div className="flex flex-col m-2">
          <label className="mb-2">Quantidade Vendida</label>
          <input
            id="quantity"
            type="number"
            {...register("quantity", {
              required: "O campo não pode estar vazio",
              validate: (value) => {
                if (value < 0) return "O valor precisa ser maior ou igual a  0";
              },
            })}
            placeholder="Digite a quantidade vendida..."
            className="rounded-sm text-start text-xs border-neutral-600 outline-slate-400 p-2 h-9"
          />
          {errors["quantity"] && (
            <p className="text-red-500 text-sm">{errors["quantity"].message}</p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-emerald-600 text-white font-semibold m-3 p-1 w-24 rounded-md"
          >
            Criar
          </button>
        </div>
      </form>
    </section>
  );
}
