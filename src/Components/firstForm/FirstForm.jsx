import React, {useState, useMemo} from 'react'
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
    anyError
} from './index'
import './FirstForm.scss'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    isFirstNameValid: state.formValidationReducer.isFirstNameValid,
    isLastNameValid: state.formValidationReducer.isLastNameValid,
    isEmailValid: state.formValidationReducer.isEmailValid,
    isPhoneValid: state.formValidationReducer.isPhoneValid
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
    isPhoneValid
}) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const anyErrorMemo = useMemo(() =>
            anyError(isFirstNameValid, isLastNameValid, isEmailValid, isPhoneValid),
        [isFirstNameValid, isLastNameValid, isEmailValid, isPhoneValid])

    return(
        <Form className='form form-first'>
            <Input
                type='text'
                placeholder='First Name'
                onBlur={() => firstNameValidation(firstName)}
                onChange={e => setFirstName(e.target.value)}
                value={firstName}
                hasError={isFirstNameValid}
                errorMessage={msg['firstName']}
            />
            <Input
                type='text'
                placeholder='Last Name'
                onBlur={() => lastNameValidation(lastName)}
                onChange={e => setLastName(e.target.value)}
                value={lastName}
                hasError={isLastNameValid}
                errorMessage={msg['lastName']}
            />
            <Input
                type='text'
                placeholder='Email'
                onBlur={() => emailValidation(email)}
                onChange={e => setEmail(e.target.value)}
                value={email}
                hasError={isEmailValid}
                errorMessage={msg['email']}
            />
            <Input
                type='text'
                placeholder='Phone'
                onInput={phoneMask}
                onBlur={() => phoneValidation(phone)}
                onChange={e => setPhone(e.target.value)}
                value={phone}
                hasError={isPhoneValid}
                errorMessage={msg['phone']}
            />
            <Input
                type='submit'
                disabled={anyErrorMemo}
            />
        </Form>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FirstForm)
