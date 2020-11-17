import React from 'react'
import {
    Input,
    validationMessages as msg,
    userSvg,
    useInputValidation
} from '../index'

function LastNameInput({setIsValid, lastName, setLastName}) {

    const isValid = useInputValidation('name', lastName)
    setIsValid(isValid)

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
