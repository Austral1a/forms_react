import React, {useEffect, useMemo, useCallback} from 'react'
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
    const customClasses = classNames('input-container', className)
    return(
        <div className={customClasses}>
            {icon && <span className='input-container__icon'><img src={icon}/></span>}
            <input
                ref={ref}
                type={type}
                placeholder={placeholder}
                className='input-container__input'
                onChange={onChange}
                onInput={onInput}
                onBlur={onBlur}
                value={value}
                style={{
                    borderBottom: hasError && !!value ? '2px solid red' : 'inherit'
                }}
                disabled={disabled}
                onFocus={onFocus}
            />
            {hasError && !!value && <p className='input-container__error'>{errorMessage}</p>}
        </div>
    )
})
