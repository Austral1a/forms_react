import {
    FIRST_NAME_VALID,
    FIRST_NAME_NOT_VALID,
    LAST_NAME_VALID,
    LAST_NAME_NOT_VALID,
    EMAIL_VALID,
    EMAIL_NOT_VALID,
    PHONE_VALID,
    PHONE_NOT_VALID
} from '../action-types'
import patterns from '../../../helpers/patterns'
import isInputValid from '../../../helpers/isInputValid'

const firstNameValid = () => ({
    type: FIRST_NAME_VALID
})

const firstNameNotValid = () => ({
    type: FIRST_NAME_NOT_VALID
})

const lastNameValid = () => ({
    type: LAST_NAME_VALID
})


const lastNameNotValid = () => ({
    type: LAST_NAME_NOT_VALID
})

const emailValid = () => ({
    type: EMAIL_VALID
})

const emailNotValid = () => ({
    type: EMAIL_NOT_VALID
})

export const phoneValid = () => ({
    type: PHONE_VALID
})

export const phoneNotValid = () => ({
    type: PHONE_NOT_VALID
})

export const firstNameValidation = (text) => {
    return (dispatch) => {
        if(!isInputValid(patterns.name, text)) {
            dispatch(firstNameValid())
        } else {
            dispatch(firstNameNotValid())
        }
    }
}

export const lastNameValidation = (text) => {
    return (dispatch) => {
        if(!isInputValid(patterns.name, text)) {
            dispatch(lastNameValid())
        } else {
            dispatch(lastNameNotValid())
        }
    }
}


export const emailValidation = (text) => {
    return (dispatch) => {
        if(!isInputValid(patterns.email, text)) {
            dispatch(emailValid())
        } else {
            dispatch(emailNotValid())
        }
    }
}

export const phoneValidation = (text) => {
    return (dispatch) => {
        if(!isInputValid(patterns.phone, text)) {
            dispatch(phoneValid())
        } else {
            dispatch(phoneNotValid())
        }
    }
}
