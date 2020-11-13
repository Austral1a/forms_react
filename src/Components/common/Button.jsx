import React from 'react'

import '../../styles/Button.scss'

function Button({
    text,
    onClick
}) {
    return (
        <button className='button' onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
