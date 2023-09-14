
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
const Button = ({text, onClick}) => {
    //const words =text.split(' ');
    return (
        <button onClick={onClick}
         className='bg-primary font-ceraBold border-none text-third   h-[46px]
          text-[20px] leading-[42px] w-full rounded-[30px] px-6 flex justify-center items-center whitespace-nowrap'>
            
            {text}
        </button>
    )
}

export default Button