import React from 'react'
import classNames from 'classnames/dedupe'
import './Button.scss'

export function Button({
    text,
    onClick,
    disabled,
    className
}) {
    const customClasses = classNames('button', className)
    return (
        <button className={customClasses} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}
