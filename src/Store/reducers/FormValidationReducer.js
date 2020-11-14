import {
    FIRST_NAME_VALID,
    FIRST_NAME_NOT_VALID,
    LAST_NAME_VALID,
    LAST_NAME_NOT_VALID,
    EMAIL_VALID,
    EMAIL_NOT_VALID,
    PHONE_VALID,
    PHONE_NOT_VALID
} from '../actions/action-types'

const initState = {
    isFirstNameValid: false,
    isLastNameValid: false,
    isEmailValid: false,
    isPhoneValid: false
}

const formValidationReducer = (state = initState, action) => {
    switch (action.type) {
        case FIRST_NAME_VALID:
            return {
                ...state,
                isFirstNameValid: true
            }
        case FIRST_NAME_NOT_VALID:
            return {
                ...state,
                isFirstNameValid: false
            }
        case LAST_NAME_VALID:
            return {
                ...state,
                isLastNameValid: true
            }
        case LAST_NAME_NOT_VALID:
            return {
                ...state,
                isLastNameValid: false
            }
        case EMAIL_VALID:
            return {
                ...state,
                isEmailValid: true
            }
        case EMAIL_NOT_VALID:
            return {
                ...state,
                isEmailValid: false
            }
        case PHONE_VALID:
            return {
                ...state,
                isPhoneValid: true
            }
        case PHONE_NOT_VALID:
            return {
                ...state,
                isPhoneValid: false
            }
        default:
            return state
    }
}

export default formValidationReducer
