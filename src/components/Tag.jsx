import React from 'react'

const tag = ({ children }) => {
    return (
        <span className="px-3 py-1 text-sm bg-transparent border-2 border-yellow-500 text-yellow-500 rounded-full transition-colors duration-300 hover:bg-yellow-300 hover:text-black">{children}</span>
    )
}

export default tag