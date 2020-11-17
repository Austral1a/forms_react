import React from 'react'

import './Button.scss'

function Button({
    text,
    onClick,
    disabled,
    className
}) {
    return (
        <button className={`button${className ? ' ' + className : ''}`} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}

export default Button
