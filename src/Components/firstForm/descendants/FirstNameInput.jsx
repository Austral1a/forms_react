import React,{useRef, useEffect} from 'react'
import {
    Input,
    userSvg,
    validationMessages as msg,
    useInputValidation
} from '../index'

function FirstNameInput({isValid, setIsValid, firstName, setFirstName}) {

    const firstNameInput = useRef(null)

    useEffect(() => {
        firstNameInput.current.focus()
    }, [])


    isValid = useInputValidation('name', firstName)

    return(
        <Input
            ref={firstNameInput}
            type='text'
            placeholder='First Name'
            onBlur={() => setIsValid(isValid)}
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
            hasError={!isValid}
            errorMessage={msg['firstName']}
            icon={userSvg}
        />
    )
}

export default FirstNameInput
