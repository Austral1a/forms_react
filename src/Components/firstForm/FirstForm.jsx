import React, {useMemo} from 'react'
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

    const firstFormHandlerMemo = useMemo(() => {
        firstFormHandler(!anyErrorMemo)
    }, [anyErrorMemo])

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
                    onClick={() => firstFormHandlerMemo}
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
