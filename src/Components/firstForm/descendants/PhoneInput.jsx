import React,{useState} from 'react'
import {
    Input,
    phoneMask,
    phoneSvg,
    validationMessages as msg
} from '../index'

import useInputValidation from '../hooks/useInputValidation'

function PhoneInput({
    isValid,
    setIsValid
    }) {

    const [phone, setPhone] = useState('')
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