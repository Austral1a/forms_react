import React from 'react'
import classNames from 'classnames/dedupe'
import './Form.scss'

export function Form({
    children,
    onSubmit,
    action,
    className
    }) {
    const customClasses = classNames('form', className)
    return(
        <form
            className={customClasses}
            action={action}
            onSubmit={onSubmit}
        >
            {children}
        </form>
    )
}
