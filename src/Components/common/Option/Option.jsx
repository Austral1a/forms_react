import React from 'react'
import classNames from 'classnames/dedupe'

function Option({
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

export default Option
