import React, { FC } from 'react'

interface InputProps {
    label?: string,
    required?: boolean,
    type?: string,
    handleEvent?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string,
    placeholder?: string,
    value?: string | number
}

const TextField: FC<InputProps> = ({ label, required, type, name, placeholder, value, className, handleEvent }) => {
    const Required = () => (
        <span className='text-primary'>*</span>
    )
    return (
        <div>
            <label className='font-semibold'>
                {label || "Title *"} &nbsp;
                {required && Required()}
            </label>
            {/*  */}
            <input
                type={type || "text"}
                placeholder={placeholder || "Enter a Text"}
                name={name}
                value={value}
                className={`w-full ${className} rounded-md border h-14 focus:shadow-lg focus:border-blue-700 focus:duration-300 transition focus:outline-none pe-10 shadow-sm sm:text-sm p-3 relative`}
                onChange={handleEvent}
            />
        </div>
    )
}

export default TextField