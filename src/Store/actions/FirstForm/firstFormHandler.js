import {FIRST_FORM_SUBMIT_SUCCESS, FIRST_FORM_SUBMIT_FAIL} from '../action-types'

const firstFormSubmitSuccess = () => ({
    type: FIRST_FORM_SUBMIT_SUCCESS
})

const firstFormSubmitFail = () => ({
    type: FIRST_FORM_SUBMIT_FAIL
})

const firstFormHandler = (hasError) => {
    return (dispatch) => {
        if(hasError) {
            dispatch(firstFormSubmitFail())
        }  else {
            dispatch(firstFormSubmitSuccess())
        }
    }
}

export default firstFormHandler
