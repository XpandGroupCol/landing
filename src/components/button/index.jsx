/*const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick}
         className='bg-white font-ceraBold border-none text-third   h-[48px] text-[20px] leading-[42px] w-full rounded-[37px] px-6 flex justify-center items-center whitespace-nowrap'>
            {text}
        </button>
    )
}

export default Button
 
*/
// el crea un objeto con los colores
const BUTTON_TYPE = {
  //fucsia
  primary: "bg-[#E62057]",
  secondary: "bg-[#5F4092]",
  default: "bg-white",
};
//cro el un objeto con colores del texto
const TEXT_TYPE = {
  //fucsia
  primary: "text-[#E62057]",
  secondary: "text-[#5F4092]",
  default: "text-white",
};
const Button = ({
  children,
  onClick,
  type = "default",
  textType = "default",
}) => {
  const bgcolor = BUTTON_TYPE[type];
  const txcolor = TEXT_TYPE[textType];
  return (
    <button
      onClick={onClick}
      className={`${bgcolor}${txcolor} font-ceraBold border-none h-[46px] text-[24px] leading-[42px] w-full rounded-[30px] px-6 flex justify-center items-center whitespace-nowrap`}
    >
      {children}
    </button>
  );
};

export default Button;
