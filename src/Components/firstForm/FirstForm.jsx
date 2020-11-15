import React, {useMemo, useEffect, useRef} from 'react'
import {
    Form,
    Input,
    Button,
    phoneMask,
    emailValidation,
    firstNameValidation,
    lastNameValidation,
    phoneValidation,
    validationMessages as msg,
    anyError,
    firstFormHandler,
    Link,
    firstNameChange,
    lastNameChange,
    emailChange,
    phoneChange
} from './index'
import './FirstForm.scss'
import {connect} from 'react-redux'


const mapStateToProps = (state) => ({
    isFirstNameValid: state.formValidationReducer.isFirstNameValid,
    isLastNameValid: state.formValidationReducer.isLastNameValid,
    isEmailValid: state.formValidationReducer.isEmailValid,
    isPhoneValid: state.formValidationReducer.isPhoneValid,
    isSubmitted: state.firstFormReducer.isSubmitted,
    firstName: state.firstFormReducer.firstName,
    lastName: state.firstFormReducer.lastName,
    email: state.firstFormReducer.email,
    phone: state.firstFormReducer.phone
})

const mapDispatchToProps = (dispatch) => ({
    firstNameValidation: (text) => {
        dispatch(firstNameValidation(text))
    },
    lastNameValidation: (text) => {
        dispatch(lastNameValidation(text))
    },
    emailValidation: (text) => {
        dispatch(emailValidation(text))
    },
    phoneValidation: (text) =>  {
        dispatch(phoneValidation(text))
    },
    firstFormHandler: (noError) => {
        dispatch(firstFormHandler(noError))
    },
    firstNameChange: (char) => {
        dispatch(firstNameChange(char))
    },
    lastNameChange: (char) => {
        dispatch(lastNameChange(char))
    },
    emailChange: (char) => {
        dispatch(emailChange(char))
    },
    phoneChange: (char) => {
        dispatch(phoneChange(char))
    }
})

function FirstForm({
    firstNameValidation,
    lastNameValidation,
    emailValidation,
    phoneValidation,
    isFirstNameValid,
    isLastNameValid,
    isEmailValid,
    isPhoneValid,
    firstFormHandler,
    firstName,
    firstNameChange,
    lastName,
    lastNameChange,
    email,
    emailChange,
    phone,
    phoneChange
}) {

    const anyErrorMemo = useMemo(() =>
            anyError(isFirstNameValid, isLastNameValid, isEmailValid, isPhoneValid),
        [isFirstNameValid, isLastNameValid, isEmailValid, isPhoneValid])

    const firstNameInput = useRef(null)

    useEffect(() => {
        firstNameInput.current.focus()
    }, [])

    return(
        <Form
            onSubmit={(e) => {
                e.preventDefault()
            }}
            className='form form-first'>
            <Input
                ref={firstNameInput}
                type='text'
                placeholder='First Name'
                onBlur={() => firstNameValidation(firstName)}
                onChange={e => firstNameChange(e.target.value)}
                value={firstName}
                hasError={!isFirstNameValid}
                errorMessage={msg['firstName']}
            />
            <Input
                type='text'
                placeholder='Last Name'
                onBlur={() => lastNameValidation(lastName)}
                onChange={e => lastNameChange(e.target.value)}
                value={lastName}
                hasError={!isLastNameValid}
                errorMessage={msg['lastName']}
            />
            <Input
                type='text'
                placeholder='Email'
                onBlur={() => emailValidation(email)}
                onChange={e => emailChange(e.target.value)}
                value={email}
                hasError={!isEmailValid}
                errorMessage={msg['email']}
            />
            <Input
                type='text'
                placeholder='Phone'
                onInput={phoneMask}
                onBlur={() => phoneValidation(phone)}
                onChange={e => phoneChange(e.target.value)}
                value={phone}
                hasError={!isPhoneValid}
                errorMessage={msg['phone']}
            />
                <Button
                    onClick={() => firstFormHandler(anyErrorMemo)}
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
