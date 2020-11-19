import React from 'react'
import classNames from 'classnames'
import './Input.scss'

export const Input = React.forwardRef((
    {
        type,
        placeholder,
        onChange,
        onInput,
        onBlur,
        value,
        hasError,
        errorMessage,
        disabled,
        icon,
        onFocus,
        className
    },
    ref,
) => {
    const customClassesContainer = classNames('input-container', className)
    const customClassesInput = classNames('input-container__input', {'input-container_error': hasError && !!value})
    return(
        <div className={customClassesContainer}>
            {icon && <span className='input-container__icon'><img src={icon}/></span>}
            <input
                ref={ref}
                type={type}
                placeholder={placeholder}
                className={customClassesInput}
                onChange={onChange}
                onInput={onInput}
                onBlur={onBlur}
                value={value}
                disabled={disabled}
                onFocus={onFocus}
            />
            {hasError && !!value && <p className='input-container__error'>{errorMessage}</p>}
        </div>
    )
})
