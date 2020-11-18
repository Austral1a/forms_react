import React from 'react'
import classNames from 'classnames/dedupe'
import './Select.scss'

function Select({defaultValue, children, onChange, className}) {
    const customClasses = classNames('select', className)
    return (
        <select onChange={onChange} className={customClasses} defaultValue={defaultValue ? defaultValue : null}>
            {children}
        </select>
    )
}

export default Select
