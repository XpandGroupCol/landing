const Button = ({text, onClick}) => {
    const words =text.split(' ');
    return (
        <button onClick={onClick}
         className='bg-primary font-ceraBold border-none text-third capitalize  h-[46px]
          text-[20px] leading-[42px] w-full rounded-[30px] px-6 flex justify-center items-center whitespace-nowrap'>
             <span className="text-black">{words[0]}</span>
            <span className="text-pink ml-1">{words[1]}</span>
            
        </button>
    )
}

export default Button