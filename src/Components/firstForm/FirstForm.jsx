import React, {useState} from 'react'
import {
    Form,
    FirstNameInput,
    LastNameInput,
    EmailInput,
    PhoneInput,
    NextBtn,
    ErrorBoundary
} from './index'
import './FirstForm.scss'

function FirstForm() {

    const [isFirstNameValid, setIsFirstNameValid] = useState(false)
    const [isLastNameValid, setIsLastNameValid] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isPhoneValid, setIsPhoneValid] = useState(false)

    return(
        <ErrorBoundary>
            <Form
                onSubmit={(e) => {
                    e.preventDefault()
                }}
                className='form form-first'>
                <FirstNameInput setIsValid={setIsFirstNameValid} />
                <LastNameInput setIsValid={setIsLastNameValid} />
                <EmailInput setIsValid={setIsEmailValid} />
                <PhoneInput setIsValid={setIsPhoneValid} />
                <NextBtn disabled={
                    !isFirstNameValid || !isLastNameValid || !isEmailValid || !isPhoneValid
                } />
            </Form>
        </ErrorBoundary>
    )
}

export default FirstForm
