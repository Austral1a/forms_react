import {
    FIRST_FORM_SUBMIT_SUCCESS,
    FIRST_FORM_SUBMIT_FAIL,
    FIRST_NAME_INPUT_CHANGE} from '../actions/action-types'

const initState = {
    isSubmitted: false,
    firstName: ''
}

const firstFormReducer = (state = initState, action) => {
    switch (action.type) {
        case FIRST_FORM_SUBMIT_SUCCESS:
            return {
                ...state,
                isSubmitted: true
            }
        case FIRST_FORM_SUBMIT_FAIL:
            return {
                ...state,
                isSubmitted: false
            }
        case FIRST_NAME_INPUT_CHANGE:
            return {
                ...state,
                firstName: action.char
            }
        default:
            return state
    }
}

export default firstFormReducer
