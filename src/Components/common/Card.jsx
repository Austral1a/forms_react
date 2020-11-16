import React from 'react'
import '../../styles/Card.scss'

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
