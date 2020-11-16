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
    firstFormHandler,
    disabled
}) {

    const anyErrorMemo = useMemo(() =>
            anyError(isFirstNameValid, isLastNameValid, isEmailValid, isPhoneValid),
        [isFirstNameValid, isLastNameValid, isEmailValid, isPhoneValid])

    const handleClick = () => firstFormHandler(!anyErrorMemo)

    return(
        <Button
            onClick={handleClick}
            disabled={disabled}
            text={<Link to='/second-form'>Next</Link>}
        />
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NextBtn)
