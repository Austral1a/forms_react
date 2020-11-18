import {validationMessages as msg, phoneMask} from '../helpers'
import {Form, Input, Button} from '../Components'
import {saveValues} from '../Store/FirstForm'
import {Link} from 'react-router-dom'
import {useState, useEffect, useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {useExtractValues, useValidations} from './index'
import {routes} from '../routes'
import {ErrorBoundary} from '../ErrorBoundary'
import emailSvg from '../assets/email.svg'
import userSvg from '../assets/user.svg'
import phoneSvg from '../assets/phone.svg'

export function FirstForm() {
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

    const firstNameChange = e => setFirstNameState(e.target.value)
    const lastNameChange = e => setLastNameState(e.target.value)
    const emailChange = e => setEmailState(e.target.value)
    const phoneChange = e => setPhoneState(e.target.value)

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
                    onBlur={isFirstNameValid}
                    onChange={firstNameChange}
                    value={firstNameState}
                    hasError={!formErrors.isFirstNameValid}
                    errorMessage={msg['firstName']}
                    icon={userSvg}
                    className={'form-first__first-name'}
                />
                <Input
                    type='text'
                    placeholder='Last Name'
                    onBlur={isLastNameValid}
                    onChange={lastNameChange}
                    value={lastNameState}
                    hasError={!formErrors.isLastNameValid}
                    errorMessage={msg['lastName']}
                    icon={userSvg}
                    className={'form-first__last-name'}
                />
                <Input
                    type='text'
                    placeholder='Email'
                    onBlur={isEmailValid}
                    onChange={emailChange}
                    value={emailState}
                    hasError={!formErrors.isEmailValid}
                    errorMessage={msg['email']}
                    icon={emailSvg}
                    className={'form-first__email'}
                />
                <Input
                    type='text'
                    placeholder='Phone'
                    onInput={phoneMask}
                    onBlur={isPhoneValid}
                    onChange={phoneChange}
                    value={phoneState}
                    hasError={!isPhoneValid}
                    errorMessage={msg['phone']}
                    icon={phoneSvg}
                    className={'form-first__phone'}
                />
                <Link to={routes.secondForm}>
                    <Button
                        onClick={saveValuesToStore}
                        disabled={isBtnDisabled}
                        text='Next'
                        className='form-first__next'
                    />
                </Link>
            </Form>
        </ErrorBoundary>
    )
}
