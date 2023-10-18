import React from 'react'

const PrimaryButton = ({ text, className }: { text: string, className?: string }) => {
    return (
        <div>
            <button className={`transition font-semibold duration-300 rounded-md px-4 p-2 border ${className}`}>
                {text}
            </button>
        </div>
    )
}

export default PrimaryButton