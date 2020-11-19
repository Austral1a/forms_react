import React from 'react';
import classNames from 'classnames';
import './Input.scss';
import {render} from '@testing-library/react'

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
    const renderError = hasError && !!value
    const customClassesContainer = classNames('input-container', className);
    const customClassesInput = classNames('input-container__input', {'input-container__input_error': renderError});
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
            {renderError && <p className='input-container__error'>{errorMessage}</p>}
        </div>
    );
});
