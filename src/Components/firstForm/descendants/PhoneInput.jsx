import React from 'react'
import {
    Input,
    phoneMask,
    phoneSvg,
    validationMessages as msg,
    useInputValidation
} from '../index'

function PhoneInput({isValid, setIsValid, phone, setPhone}) {

    isValid = useInputValidation('phone', phone)
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