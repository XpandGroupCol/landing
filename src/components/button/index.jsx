const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick}
         className='bg-primary font-ceraBold border-none text-thirduppercase  h-[48px] text-[20px] leading-[42px] w-full rounded-xl px-6 flex justify-center items-center whitespace-nowrap'>
            {text}
        </button>
    )
}

export default Button