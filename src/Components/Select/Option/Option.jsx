import React from 'react'
import classNames from 'classnames/dedupe'

export function Option({
    value,
    text,
    className
}) {
    const customClasses = classNames('select__option', className)
    return (
        <option
            className={customClasses}
            value={value}
        >
            {text}
        </option>
    )
}

