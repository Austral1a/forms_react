import React from 'react'
import {connect} from 'react-redux'
import {
    emailChange,
    emailSvg,
    emailValidation,
    Input,
    validationMessages as msg
} from '../index'


const mapStateToProps = (state) => ({
    isEmailValid: state.formValidationReducer.isEmailValid,
    email: state.firstFormReducer.email,
})

const mapDispatchToProps = (dispatch) => ({
    emailValidation: (text) => {
        dispatch(emailValidation(text))
    },
    emailChange: (char) => {
        dispatch(emailChange(char))
    }
})

function EmailInput({
    email,
    isEmailValid,
    emailValidation,
    emailChange
}) {
    return(
        <Input
            type='text'
            placeholder='Email'
            onBlur={() => emailValidation(email)}
            onChange={e => emailChange(e.target.value)}
            value={email}
            hasError={!isEmailValid}
            errorMessage={msg['email']}
            icon={emailSvg}
        />
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmailInput)
