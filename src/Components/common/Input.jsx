import React, {useEffect} from 'react'

import '../../styles/Input.scss'

const Input = React.forwardRef((
    {
        type,
        placeholder,
        onChange,
        onInput,
        onBlur,
        value,
        hasError,
        errorMessage,
        disabled
    },
    ref,
) => {
    return(
        <div className='input-container'>
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
                    borderBottom: hasError ? '2px solid red' : 'inherit'
                }}
                disabled={disabled}
            />
            {hasError ? errorMessage : null}
        </div>
    )
})

export default Input
