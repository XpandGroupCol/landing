import { useState } from "react";
import WelcomeForm from "../form";

const EmailInput = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="justify-center flex gap-3">
      <input
        name="email"
        placeholder="Ingresa tu correo electronico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-[408px] pl-[23px] text-[16px] rounded-[50px] h-auto] text-white border-[1px] bg-transparent opacity-[50%] leading-[20.11px] font-ceraLight"
      />
      <div className="flex">
      <WelcomeForm
        text="Iniciar Prueba Gratuita"
        type="secondary"
        email={email}
       
      />
       </div>
    </div>
  );
};

export default EmailInput;
