import React,{useRef, useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {
    Input,
    userSvg,
    validationMessages as msg
} from '../index'
import useInputValidation from '../hooks/useInputValidation'

function FirstNameInput({
    isValid,
    setIsValid
}) {

    const firstNameInput = useRef(null)

    useEffect(() => {
        firstNameInput.current.focus()
    }, [])

    const [firstName, setFirstName] = useState('')
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
