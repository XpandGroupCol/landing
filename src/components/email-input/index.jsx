import React, { useState } from "react"; 
import WelcomeForm from "../form";

const EmailInput = ({ type = "secondary" }) => {
  const [email, setEmail] = useState("");
  return ( <div className="flex flex-col w-full sm:w-fit lg:w-full gap-1 sm:flex-row">
      <input
        name="email"
        placeholder="Ingresa tu correo electronico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="font-ceraLight rounded-full border h-[40px] border-[#ffffff99] text-[#ffffff99] text-sm bg-transparent placeholder:text-[#ffffff99] px-8 py-2 sm:min-w-[320px]"
      />
      <WelcomeForm
          text="Iniciar Prueba Gratuita"
          type={type}
          email={email}
        />
    </div>
  );
};

export default EmailInput;
