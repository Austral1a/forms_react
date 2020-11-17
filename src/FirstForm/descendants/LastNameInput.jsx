import React from 'react'
import {
    Input,
    validationMessages as msg,
    userSvg,
    useInputValidation
} from '../index'

function LastNameInput({isValid, setIsValid, lastName, setLastName}) {

    isValid = useInputValidation('name', lastName)

    return(
        <Input
            type='text'
            placeholder='Last Name'
            onBlur={() => setIsValid(isValid)}
            onChange={e => setLastName(e.target.value)}
            value={lastName}
            hasError={!isValid}
            errorMessage={msg['lastName']}
            icon={userSvg}
        />
    )
}

export default LastNameInput
