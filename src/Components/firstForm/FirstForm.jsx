import React, {useMemo, useEffect} from 'react'
import {
    Form,
    Button,
    anyError,
    firstFormHandler,
    Link,
} from './index'
import './FirstForm.scss'
import {connect} from 'react-redux'
import FirstNameInput from './FirstNameInput'
import LastNameInput from './LastNameInput'
import EmailInput from './EmailInput'
import PhoneInput from './PhoneInput'

const mapStateToProps = (state) => ({
    isSubmitted: state.firstFormReducer.isSubmitted,
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

function FirstForm({
    isFirstNameValid,
    isLastNameValid,
    isEmailValid,
    isPhoneValid,
    firstFormHandler,
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
        <Form
            onSubmit={(e) => {
                e.preventDefault()
            }}
            className='form form-first'>
            <FirstNameInput />
            <LastNameInput />
            <EmailInput />
            <PhoneInput />
                <Button
                    onClick={handleClick}
                    disabled={anyErrorMemo}
                    text={<Link to='/second-form'>Next</Link>}
                />
        </Form>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FirstForm)
