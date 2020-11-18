import React from 'react'
import {useInputValidation} from '../index'

function useValidations(firstName, lastName, email, phone) {
    return {
        isFirstNameValid: useInputValidation('name', firstName),
        isLastNameValid: useInputValidation('name', lastName),
        isEmailValid: useInputValidation('email', email),
        isPhoneValid: useInputValidation('phone', phone)
    }
}

export default useValidations
