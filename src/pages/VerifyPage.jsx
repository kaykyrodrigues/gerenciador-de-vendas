import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { verifyEmail } from "../services/AuthService";

export default function VerifyPage() {
  const [params] = useSearchParams();

  useEffect(() => {
    const token = params.get("token");

    async function verify() {
      const res = await verifyEmail(token);
      alert(res.message || res.error);
    }

    verify();
  }, );

  return <p>Verificando email...</p>;
}