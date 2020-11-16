import React, {useState} from 'react'
import {
    Input,
    validationMessages as msg,
    userSvg
} from '../index'
import useInputValidation from '../hooks/useInputValidation'

function LastNameInput({
    isValid,
    setIsValid
}) {

    const [lastName, setLastName] = useState('')
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
