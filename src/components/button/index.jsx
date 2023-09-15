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
  primary: "bg-[#E62057]",
  secondary: "bg-[#5F4092]",
  default: "bg-white",
};
const Button = ({ children, onClick, type = "default" }) => {
  const bgcolor = BUTTON_TYPE[type];
  return (
    <button
      onClick={onClick}
      className={`${bgcolor} font-ceraBold border-none h-[46px] text-[24px] leading-[42px] w-full rounded-[30px] px-6 flex justify-center items-center whitespace-nowrap`}
    >
      {children}
    </button>
  );
};

export default Button;
