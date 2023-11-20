const BUTTON_TYPE = {
  primary: {
    bg: "bg-[white]",
    text: ["text-black", "text-[#E62057] font-ceraBold"],
  },
  secondary: {
    bg: "bg-[#E62057]",
    text: ["font-ceraLight", "font-ceraLight", "font-ceraBold"],
  },
  third: {
    bg: "bg-[white]",
    text: ["text-black font-ceraLight", "text-black ", "text-[#E62057] font-ceraBold"],
  },
  fourth: {
    bg: "bg-[#5F4092]",
    text: [" font-ceraLight", "text-[white] ", " font-ceraBold"],
  },
  default: {
    bg: "bg-white",
    text: ["text-gray-300 font-ceraLight", "text-gray-300 font-ceraBold"],
  },
};

const Button = ({ children, onClick, type = "default" }) => {
  const words = children.split(' ');
  const config = BUTTON_TYPE[type] || BUTTON_TYPE.default;

  return (
    <button onClick={onClick} className={`${config.bg} text-[white] font-ceraLight border-none text-[16px] h-[40px] w-full rounded-[30px] px-6 flex justify-center items-center lg:text-[20px] sm:max-w-[250px]`}>
      {words.map((word, index) => (
        <span key={index} className={config.text[index]}>
          {word}
          {index !== words.length - 1 ? <span dangerouslySetInnerHTML={{ __html: '&nbsp;' }} /> : ''}
        </span>
      ))}
    </button>
  );
  

};
 export default  Button 