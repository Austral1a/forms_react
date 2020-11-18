import React from 'react'
import classNames from 'classnames/dedupe'

function Option({
    value,
    text,
    className
}) {
    const customClasses = classNames(className)
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
