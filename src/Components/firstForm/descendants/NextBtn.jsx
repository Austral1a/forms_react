import React, {useEffect, useMemo} from 'react'
import {connect} from 'react-redux'

import {anyError, Button, firstFormHandler, Link} from '../index'

const mapStateToProps = (state) => ({
    isFirstNameValid: state.formValidationReducer.isFirstNameValid,
    isLastNameValid: state.formValidationReducer.isLastNameValid,
    isEmailValid: state.formValidationReducer.isEmailValid,
    isPhoneValid: state.formValidationReducer.isPhoneValid,
})

const mapDispatchToProps = (dispatch) => ({
    firstFormHandler: (noError) => {
        dispatch(firstFormHandler(noError))
    }
})

function NextBtn({
    isFirstNameValid,
    isLastNameValid,
    isEmailValid,
    isPhoneValid,
    firstFormHandler
}) {

    const anyErrorMemo = useMemo(() =>
            anyError(isFirstNameValid, isLastNameValid, isEmailValid, isPhoneValid),
        [isFirstNameValid, isLastNameValid, isEmailValid, isPhoneValid])

    useEffect(() => {
        // if user is have returned back to the prev form
        // just to be on the safe side, set isSubmitted for FirstForm - false
        // anyway, after click on the next button, isSubmitted will compute again
        firstFormHandler(false)
    }, [])

    const handleClick = () => firstFormHandler(!anyErrorMemo)

    return(
        <Button
            onClick={handleClick}
            disabled={anyErrorMemo}
            text={<Link to='/second-form'>Next</Link>}
        />
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NextBtn)
