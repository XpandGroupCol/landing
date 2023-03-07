const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick}
         className='bg-primary border-none text-white uppercase px-8 py-4 font-bold w-full rounded-xl'>
            {text}
        </button>
    )
}

export default Button