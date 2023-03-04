const Box = ({ title, number = '00'}) => {
    return (
        <div className="bg-secondary rounded-xl px-2 py-1 flex flex-col items-center min-w-[42px]">
            <p className="text-[10px] uppercase leading-none font-bold">{title}</p>
            <h4 className="text-xl font-bold">{number}</h4>
        </div>
    )
}

export default Box