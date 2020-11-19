import React from 'react'
import classNames from 'classnames/dedupe'
import './Card.scss'

export function Card({
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
