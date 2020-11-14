import React from 'react'

import '../../styles/Button.scss'

function Button({
    text,
    onClick,
    disabled
}) {
    return (
        <button className='button' onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}

export default Button
