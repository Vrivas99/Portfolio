// SocialButton.js
import React from 'react';

function SocialButton({ href, bgColor, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={`flex ${bgColor} hover:saturate-200 p-2 rounded-md text-slate-200 shadow-md transition-all duration-500`}
        >
            {children}
        </a>
    );
}

export default SocialButton;
