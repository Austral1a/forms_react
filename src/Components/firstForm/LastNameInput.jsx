import React from 'react'
import {connect} from 'react-redux'
import {
    Input,
    lastNameChange,
    lastNameValidation,
    validationMessages as msg,
    userSvg
} from './index'


const mapStateToProps = (state) => ({
    isLastNameValid: state.formValidationReducer.isLastNameValid,
    lastName: state.firstFormReducer.lastName,
})

const mapDispatchToProps = (dispatch) => ({
    lastNameValidation: (text) => {
        dispatch(lastNameValidation(text))
    },
    lastNameChange: (char) => {
        dispatch(lastNameChange(char))
    }
})

function LastNameInput({
    lastNameChange,
    lastNameValidation,
    lastName,
    isLastNameValid
}) {
    return(
        <Input
            type='text'
            placeholder='Last Name'
            onBlur={() => lastNameValidation(lastName)}
            onChange={e => lastNameChange(e.target.value)}
            value={lastName}
            hasError={!isLastNameValid}
            errorMessage={msg['lastName']}
            icon={userSvg}
        />
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LastNameInput)
