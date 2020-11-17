import React from 'react'
import {
    emailSvg,
    Input,
    validationMessages as msg,
    useInputValidation
} from '../index'


function EmailInput({isValid, setIsValid, email, setEmail}) {

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