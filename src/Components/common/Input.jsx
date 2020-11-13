import React from 'react'

import '../../styles/Input.scss'

function Input({
                   label,
                   type,
                   placeholder,
                   onChange,
                   onInput,
                   onBlur,
                   value
               }) {
    return(
        <label className='input-container'>
            <p>{label}</p>
            <input
                type={type}
                placeholder={placeholder}
                className='input-container__input'
                onChange={onChange}
                onInput={onInput}
                onBlur={onBlur}
                value={value}
            />
        </label>
    )
}

export default Input
