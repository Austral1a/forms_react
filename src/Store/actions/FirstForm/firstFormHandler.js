import {FIRST_FORM_SUBMIT_SUCCESS, FIRST_FORM_SUBMIT_FAIL} from '../action-types'

const firstFormSubmitSuccess = () => ({
    type: FIRST_FORM_SUBMIT_SUCCESS
})

const firstFormSubmitFail = () => ({
    type: FIRST_FORM_SUBMIT_FAIL
})

const firstFormHandler = (noError) => {
    return (dispatch) => {
        if(noError) {
            dispatch(firstFormSubmitSuccess())
        }  else {
            dispatch(firstFormSubmitFail())
        }
    }
}

export default firstFormHandler
