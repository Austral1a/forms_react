import React, {useEffect, useMemo, useCallback} from 'react'

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


    const renderError = useCallback(() => {
        console.log(hasError, value)
        if(!hasError) {
            return null
        } else if(value === '') {
            return ''
        } else if(hasError) {
            return <p className='input-container__error'>{errorMessage}</p>
        }
    }, [hasError, value])

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
                    borderBottom: hasError && value !== '' ? '2px solid red' : 'inherit'
                }}
                disabled={disabled}
            />
            {renderError()}
        </div>
    )
})

export default Input
