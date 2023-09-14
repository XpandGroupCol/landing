const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick}
         className='bg-primary font-ceraBold border-none text-third capitalize  h-[46px] text-[20px] leading-[42px] w-full rounded-[30px] px-6 flex justify-center items-center whitespace-nowrap'>
            {text}
        </button>
    )
}

export default Button