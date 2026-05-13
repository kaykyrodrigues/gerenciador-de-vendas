import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home";
import SalesPage from "./pages/SalesPage";
import DashboardPage from "./pages/DashboardPage";
import CreateSale from "./pages/CreateSale";
import CreatedSale from "./pages/CreatedSale";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      {/* ROTAS PÚBLICAS */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* ROTAS PRIVADAS */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      <Route
        path="/sales"
        element={
          <PrivateRoute>
            <SalesPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/createsale"
        element={
          <PrivateRoute>
            <CreateSale />
          </PrivateRoute>
        }
      />

      <Route
        path="/createdsale"
        element={
          <PrivateRoute>
            <CreatedSale />
          </PrivateRoute>
        }
      />

      <Route
        path="/reports"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}