import React from 'react'
import {
    Input,
    phoneMask,
    phoneSvg,
    validationMessages as msg,
    useInputValidation
} from '../index'

function PhoneInput({setIsValid, phone, setPhone}) {

    const isValid = useInputValidation('phone', phone)
    setIsValid(isValid)

    return(
        <Input
            type='text'
            placeholder='Phone'
            onInput={phoneMask}
            onBlur={() => setIsValid(isValid)}
            onChange={e => setPhone(e.target.value)}
            value={phone}
            hasError={!isValid}
            errorMessage={msg['phone']}
            icon={phoneSvg}
        />
    )
}

export default PhoneInput