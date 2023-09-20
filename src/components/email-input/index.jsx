import { useState } from "react";
import WelcomeForm from "../form";

const EmailInput = ({type ="secondary"}) => {
  const [email, setEmail] = useState("");
  return (
    <div className="justify-center items-center flex gap-3 lg:flex-row xxs:flex-col xs:flex-col md:flex-col  w-auto lg:w-auto ">
      <input
        name="email"
        placeholder="Ingresa tu correo electronico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-[408px] lg:w-[408px] xs:w-[320px] xxs:w-[300px] md:w-auto xs:h-[40px] md:h-[36px] xxs:h-[36px] pl-[23px] lg:pl-[23px] xs:pl-0 text-[16px] rounded-[50px] h-[46px] lg:h-[46px] text-white border-[1px] bg-transparent opacity-[50%] leading-[20.11px] font-ceraLight"
      />
      <div className="flex justify-center items-center lg:w-auto w-auto  xs:w-[368px] xs:h-[36px] md:h-[36px] xxs:h-[36px]">
      <WelcomeForm
        text="Iniciar Prueba Gratuita"
        type={type}
        email={email}
       
      />
       </div>
    </div>
  );
};

export default EmailInput;
