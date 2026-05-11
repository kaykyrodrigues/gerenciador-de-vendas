import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { resetPassword } from "../services/AuthService";

export default function ResetPasswordPage() {
  const [params] = useSearchParams();
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const token = params.get("token");

    const res = await resetPassword({
      token,
      newPassword: password,
    });

    alert(res.message || res.error);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        placeholder="Nova senha"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Resetar</button>
    </form>
  );
}
