import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {
    Form,
    NextBtn,
    ErrorBoundary,
    useExtractValues,
    saveValues,
    validationMessages as msg,
    userSvg,
    Input,
    useInputValidation,
    emailSvg,
    phoneMask,
    phoneSvg,
    Button,
    Link
} from './index'
import './FirstForm.scss'


function FirstForm() {
    const firstNameInput = useRef(null)
    // const vals = useExtractValues()
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

    const dispatch = useDispatch()
    const memoDispatch = useCallback(
        () => dispatch(saveValues(firstName, lastName, email, phone)),
        [firstName, lastName, email, phone]
    )

    const isEmailValid = useInputValidation('email', emailState)
    const isPhoneValid = useInputValidation('phone', phoneState)
    const isFirstNameValid = useInputValidation('name', firstNameState)
    const isLastNameValid = useInputValidation('name', lastNameState)

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
                    ref={firstNameInput}
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
                {/*<FirstNameInput firstName={firstName} setFirstName={setFirstName} setIsValid={setIsFirstNameValid} />*/}
                {/*<LastNameInput lastName={lastName} setLastName={setLastName} setIsValid={setIsLastNameValid} />*/}
                {/*<EmailInput email={email} setEmail={setEmail} setIsValid={setIsEmailValid} />*/}
                {/*<PhoneInput phone={phone} setPhone={setPhone} setIsValid={setIsPhoneValid} />*/}
                <Link to='/second-form'>
                    <Button
                        onClick={memoDispatch}
                        disabled={isBtnDisabled}
                        text='Next'
                    />
                </Link>
            </Form>
        </ErrorBoundary>
    )
}

export default FirstForm
