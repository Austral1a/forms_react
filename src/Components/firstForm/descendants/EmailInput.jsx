import React, {useState} from 'react'
import {
    emailSvg,
    Input,
    validationMessages as msg
} from '../index'
import useInputValidation from '../hooks/useInputValidation'


function EmailInput({isValid, setIsValid}) {

    const [email, setEmail] = useState('')
    isValid = useInputValidation('email', email)

    return(
        <Input
            type='text'
            placeholder='Email'
            onBlur={() => setIsValid(isValid)}
            onChange={e => setEmail(e.target.value)}
            value={email}
            hasError={!isValid}
            errorMessage={msg['email']}
            icon={emailSvg}
        />
    )
}

export default EmailInput