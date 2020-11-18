import React from 'react'
import classNames from 'classnames/dedupe'
import './Card.scss'


function Card({
    style,
    className,
    children
}) {
    const customClasses = classNames('card', className)
    return (
        <div
            style={style}
            className={customClasses}
        >
            {children}
        </div>
    )
}

export default Card
