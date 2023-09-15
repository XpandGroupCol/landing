import { useState } from "react";
import WelcomeForm from "../form";

const EmailInput = () => {
  const [email, setEmail] = useState("");
  return (
    <div>
      <input
        name="email"
        placeholder="Ingresa tu correo electronico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <WelcomeForm text="Iniciar Prueba Gratuita" email={email} />
    </div>
  );
};

export default EmailInput;
