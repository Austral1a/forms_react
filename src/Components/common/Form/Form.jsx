import React from 'react'
import classNames from 'classnames/dedupe'
import './Form.scss'

function Form({
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

export default Form
