import React from 'react'
import './Card.scss'

function Card({
    style,
    className,
    children
}) {
    return (
        <div
            style={style}
            className={`card${className ? ' ' + className : ''}`}
        >
            {children}
        </div>
    )
}

export default Card
