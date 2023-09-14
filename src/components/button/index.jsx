
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
const Button = ({ text, onClick }) => {
    const words = text.split(' ');

    return (
        <button onClick={onClick} className='bg-white font-ceraBold border-none h-[46px] text-[20px] leading-[42px] w-full rounded-[30px] px-6 flex justify-center items-center whitespace-nowrap'>
            {words.length === 2 ? (
                <>
                    <span className="text-third">{words[0]}</span> 
                    <span className="text-black ml-1">{words[1]}</span> 
                </>
            ) : (
                text
            )}
        </button>
    )
}

export default Button