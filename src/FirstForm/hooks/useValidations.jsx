import {useInputValidation} from '../index'

export function useValidations(firstName, lastName, email, phone) {
    return {
        isFirstNameValid: useInputValidation('name', firstName),
        isLastNameValid: useInputValidation('name', lastName),
        isEmailValid: useInputValidation('email', email),
        isPhoneValid: useInputValidation('phone', phone)
    }
}

