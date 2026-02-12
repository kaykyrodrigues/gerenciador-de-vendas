import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SalesPage from "./pages/SalesPage.jsx";
import CriarVenda from "./pages/CreateSale.jsx"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sales" element={<SalesPage />} />
      <Route path="/createsale" element={<CriarVenda />} />
    </Routes>
  );
}
