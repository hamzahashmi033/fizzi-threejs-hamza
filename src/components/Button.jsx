import React from 'react'
import clsx from 'clsx'
const Button = ({ buttonLink, buttonText, className }) => {
    return (
        <div className={clsx("rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl", className)}>
            <a href="#">{buttonText}</a>
        </div>
    )
}

export default Button
