import {FIRST_FORM_SUBMIT_SUCCESS, FIRST_FORM_SUBMIT_FAIL} from '../actions/action-types'

const initState = {
    isSubmitted: false
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
        default:
            return state
    }
}

export default firstFormReducer
