import React, {useState, useEffect, useRef, useMemo} from 'react'
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
    saveValues, validationMessages as msg, userSvg, Input, useInputValidation, emailSvg, phoneMask, phoneSvg
} from './index'
import './FirstForm.scss'

function FirstForm() {
    const firstNameInput = useRef(null)
    const vals = useExtractValues()

    const [isFirstNameValid, setIsFirstNameValid] = useState(false)
    const [isLastNameValid, setIsLastNameValid] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isPhoneValid, setIsPhoneValid] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        firstNameInput.current.focus()

        setFirstName(vals.firstName)
        setLastName(vals.lastName)
        setEmail(vals.email)
        setPhone(vals.phone)
    }, [])

    const errors = {
            firstName: useInputValidation('name', firstName),
            lastName: useInputValidation('name', lastName),
            email: useInputValidation('email', email),
            phone: useInputValidation('phone', phone)
    }
    const errorsMemo = useMemo(
        () => errors,
        [firstName, lastName, email, phone]
    )
    const validation = {
        firstName: () => setIsFirstNameValid(errorsMemo.firstName),
        lastName: () => setIsLastNameValid(errorsMemo.lastName),
        email: () => setIsEmailValid(errorsMemo.email),
        phone: () => setIsPhoneValid(errorsMemo.phone)
    }

    return(
        <ErrorBoundary>
            <Form
                onSubmit={(e) => {
                    e.preventDefault()
                }}

                className='form form-first'>
                <button onClick={() => {
                    console.log(firstName, lastName, email, phone)
                    console.log(isFirstNameValid, isLastNameValid, isEmailValid, isPhoneValid)
                }}>click</button>
                <Input
                    ref={firstNameInput}
                    type='text'
                    placeholder='First Name'
                    onFocus={() => setIsFirstNameValid(true)}
                    onBlur={validation.firstName}
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                    hasError={!isFirstNameValid}
                    errorMessage={msg['firstName']}
                    icon={userSvg}
                />
                <Input
                    type='text'
                    placeholder='Last Name'
                    onFocus={validation.lastName}
                    onBlur={validation.lastName}
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                    hasError={!isLastNameValid}
                    errorMessage={msg['lastName']}
                    icon={userSvg}
                />
                <Input
                    type='text'
                    placeholder='Email'
                    onFocus={() => setIsEmailValid(true)}
                    onBlur={validation.email}
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    hasError={!isEmailValid}
                    errorMessage={msg['email']}
                    icon={emailSvg}
                />
                <Input
                    type='text'
                    placeholder='Phone'
                    onInput={phoneMask}
                    onFocus={() => setIsPhoneValid(true)}
                    onBlur={validation.phone}
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
