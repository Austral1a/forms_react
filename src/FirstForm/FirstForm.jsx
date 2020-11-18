import React, {useState, useEffect, useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {
    Form,
    ErrorBoundary,
    useExtractValues,
    saveValues,
    validationMessages as msg,
    userSvg,
    Input,
    emailSvg,
    phoneMask,
    phoneSvg,
    Button,
    Link,
    useValidations
} from './index'
import './FirstForm.scss'

function FirstForm() {
    const {
        firstName,
        lastName,
        email,
        phone
    } = useExtractValues()

    const [firstNameState, setFirstNameState] = useState(firstName)
    const [lastNameState, setLastNameState] = useState(lastName)
    const [emailState, setEmailState] = useState(email)
    const [phoneState, setPhoneState] = useState(phone)
    const [formErrors, setFormErrors] = useState({})

    const {
        isFirstNameValid,
        isLastNameValid,
        isEmailValid,
        isPhoneValid
    } = useValidations(firstNameState, lastNameState, emailState, phoneState)

    const dispatch = useDispatch()
    const saveValuesToStore = useCallback(
        () => dispatch(saveValues(firstNameState, lastNameState, emailState, phoneState)),
        [firstNameState, lastNameState, emailState, phoneState]
    )

    useEffect(() => {
        let errors = {}
        errors = {...errors, isEmailValid, isPhoneValid, isFirstNameValid, isLastNameValid}
        setFormErrors(errors)
    }, [isEmailValid, isPhoneValid, isFirstNameValid, isLastNameValid])

    const isBtnDisabled = Object.values(formErrors).includes(false)
    return(
        <ErrorBoundary>
            <Form
                onSubmit={(e) => {
                    e.preventDefault()
                }}
                className='form form-first'>
                <Input
                    type='text'
                    placeholder='First Name'
                    onBlur={() => isFirstNameValid}
                    onChange={e => setFirstNameState(e.target.value)}
                    value={firstNameState}
                    hasError={!formErrors.isFirstNameValid}
                    errorMessage={msg['firstName']}
                    icon={userSvg}
                />
                <Input
                    type='text'
                    placeholder='Last Name'
                    onBlur={() => isLastNameValid}
                    onChange={e => setLastNameState(e.target.value)}
                    value={lastNameState}
                    hasError={!formErrors.isLastNameValid}
                    errorMessage={msg['lastName']}
                    icon={userSvg}
                />
                <Input
                    type='text'
                    placeholder='Email'
                    onBlur={() => isEmailValid}
                    onChange={e => setEmailState(e.target.value)}
                    value={emailState}
                    hasError={!formErrors.isEmailValid}
                    errorMessage={msg['email']}
                    icon={emailSvg}
                />
                <Input
                    type='text'
                    placeholder='Phone'
                    onInput={phoneMask}
                    onBlur={() => isPhoneValid}
                    onChange={e => setPhoneState(e.target.value)}
                    value={phoneState}
                    hasError={!isPhoneValid}
                    errorMessage={msg['phone']}
                    icon={phoneSvg}
                />
                <Link to='/second-form'>
                    <Button
                        onClick={saveValuesToStore}
                        disabled={isBtnDisabled}
                        text='Next'
                    />
                </Link>
            </Form>
        </ErrorBoundary>
    )
}

export default FirstForm
