import { forwardRef } from "react"

const Input = forwardRef(({ type, name, id, placeholder, onChange, error = '', label, ...props }, ref) => {
    return (
        <div>
                <input
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder || label}
                    onChange={onChange}
                    ref={ref}
                    {...props}
                    className={`focus:outline-none focus:ring-2 focus:ring-primary block text-gray-500 w-full px-5 py-3 rounded-md border-[1px] placeholder:text-gray-400 ${error ? 'border-red-600': 'border-gray-400'}`} />
        {error && <span className="text-red-600 text-[12px]">{error}</span>}
        </div>
    )
})

export default Input