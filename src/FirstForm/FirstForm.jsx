import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {
    Form,
    FirstNameInput,
    LastNameInput,
    EmailInput,
    PhoneInput,
    NextBtn,
    ErrorBoundary,
    useExtractValues,
    saveValues
} from './index'
import './FirstForm.scss'

function FirstForm() {
    const vals = useExtractValues()

    const [isFirstNameValid, setIsFirstNameValid] = useState(true)
    const [isLastNameValid, setIsLastNameValid] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPhoneValid, setIsPhoneValid] = useState(true)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        setFirstName(vals.firstName)
        setLastName(vals.lastName)
        setEmail(vals.email)
        setPhone(vals.phone)
    }, [])

    return(
        <ErrorBoundary>
            <Form
                onSubmit={(e) => {
                    e.preventDefault()
                }}
                className='form form-first'>
                <FirstNameInput firstName={firstName} setFirstName={setFirstName} setIsValid={setIsFirstNameValid} />
                <LastNameInput lastName={lastName} setLastName={setLastName} setIsValid={setIsLastNameValid} />
                <EmailInput email={email} setEmail={setEmail} setIsValid={setIsEmailValid} />
                <PhoneInput phone={phone} setPhone={setPhone} setIsValid={setIsPhoneValid} />
                <NextBtn
                    onClick={() => dispatch(saveValues(firstName, lastName, email, phone))}
                    disabled={
                        !isFirstNameValid || !isLastNameValid || !isEmailValid || !isPhoneValid
                    }
                />
            </Form>
        </ErrorBoundary>
    )
}

export default FirstForm
