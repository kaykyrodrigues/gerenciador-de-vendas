import { useState, useEffect } from "react";
import { getReports } from "../services/ReportsService";
import Slider from "react-slick";

export default function Status() {
  const [report, setReport] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadReports() {
      try {
        const data = await getReports();
        setReport(data.data);
        console.log(data);
      } catch (err) {
        setError("Erro ao carregar relatórios");
        console.error(err);
      }
    }

    loadReports();
  }, []);

  if (error) return <p>{error}</p>;

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <section className="slider-container w-60 m-auto p-3 bg-emerald-600 shadow-md rounded-lg text-sm text-center text-white font-light">
      {report && (
        <Slider {...settings}>
          <div>
            <h1>Total Faturado</h1>
            <p className="text-amber-400 text-2xl font-semibold">
              $ {report.faturamentoTotal}
            </p>
          </div>
          <div>
            <h2>Quantidade Vendida</h2>
            <p className="text-amber-400 text-2xl font-semibold">
              {report.quantidadeTotal}
            </p>
          </div>
        </Slider>
      )}
    </section>
  );
}
