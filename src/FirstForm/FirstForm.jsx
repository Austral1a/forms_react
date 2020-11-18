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
    const vals = useExtractValues()

    const [firstName, setFirstName] = useState(vals.firstName)
    const [lastName, setLastName] = useState(vals.lastName)
    const [email, setEmail] = useState(vals.email)
    const [phone, setPhone] = useState(vals.phone)
    const [formErrors, setFormErrors] = useState({})

    const dispatch = useDispatch()
    const memoDispatch = useCallback(
        () => dispatch(saveValues(firstName, lastName, email, phone)),
        [firstName, lastName, email, phone]
    )

    const isEmailValid = useInputValidation('email', email)
    const isPhoneValid = useInputValidation('phone', phone)
    const isFirstNameValid = useInputValidation('name', firstName)
    const isLastNameValid = useInputValidation('name', lastName)

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
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                    hasError={!formErrors.isFirstNameValid}
                    errorMessage={msg['firstName']}
                    icon={userSvg}
                />
                <Input
                    type='text'
                    placeholder='Last Name'
                    onBlur={() => isLastNameValid}
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                    hasError={!formErrors.isLastNameValid}
                    errorMessage={msg['lastName']}
                    icon={userSvg}
                />
                <Input
                    type='text'
                    placeholder='Email'
                    onBlur={() => isEmailValid}
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    hasError={!formErrors.isEmailValid}
                    errorMessage={msg['email']}
                    icon={emailSvg}
                />
                <Input
                    type='text'
                    placeholder='Phone'
                    onInput={phoneMask}
                    onBlur={() => isPhoneValid}
                    onChange={e => setPhone(e.target.value)}
                    value={phone}
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
