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
        disabled,
        icon
    },
    ref,
) => {
    return(
        <div className='input-container'>
            {icon ? <span className='input-container__icon'><img src={icon}/></span> : null}
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
            {hasError ? <p className='input-container__error'>{errorMessage}</p> : null}
        </div>
    )
})

export default Input
