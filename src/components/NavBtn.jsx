import React from 'react'

const NavBtn = ({ href, children, tooltip }) => {
    return (
        <a
            href={href}
            className="group relative flex justify-center p-3 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500"
        >
            {children}
            <span
                className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-200 group-hover:text-sm group-hover:-translate-y-10 duration-300"
            >
                {tooltip}
            </span>
        </a>
    )
}

export default NavBtn