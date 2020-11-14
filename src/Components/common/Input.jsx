import React from 'react'

import '../../styles/Input.scss'

function Input({
    type,
    placeholder,
    onChange,
    onInput,
    onBlur,
    value,
    hasError,
    errorMessage
}) {
    return(
        <div className='input-container'>
            <input
                type={type}
                placeholder={placeholder}
                className='input-container__input'
                onChange={onChange}
                onInput={onInput}
                onBlur={onBlur}
                value={value}
                style={{
                    borderBottom: hasError ? '2px solid red' : 'inherit'
                }}
            />
            {hasError ? errorMessage : null}
        </div>
    )
}

export default Input
