import { useCountDown } from "../../hooks/useCountDown"
import Box from "./box"

const CountDown = () => {
    const {minutes, seconds, hours, hidden} = useCountDown('2023-03-16:08:00:00')

 

    return !hidden ? (
        <div className="flex items-center gap-3">
            <p className="text-primary font-semibold">ENCUÉNTRANOS EN STARCO</p>
            <div className="flex items-center gap-3 text-white">
                <Box title='h' number={hours}/>
                <span className="w-[10px] h-[10px] bg-secondary rounded-full" />
                <Box title='m' number={minutes}/>
                <span className="w-[10px] h-[10px] bg-secondary rounded-full" />
                <Box title='s' number={seconds}/>
            </div>
        </div>
    ) : null
}

export default CountDown