import React from 'react'

import '../../styles/Button.scss'

function Button({
    text,
    onClick,
    disabled,
    className
}) {
    return (
        <button className={`button ${className}`} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}

export default Button
