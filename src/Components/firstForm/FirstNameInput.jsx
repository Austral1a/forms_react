import React,{useRef, useEffect} from 'react'
import {connect} from 'react-redux'
import {
    firstNameChange,
    firstNameValidation,
    Input,
    userSvg,
    validationMessages as msg
} from './index'

const mapStateToProps = (state) => ({
    isFirstNameValid: state.formValidationReducer.isFirstNameValid,
    firstName: state.firstFormReducer.firstName,
})

const mapDispatchToProps = (dispatch) => ({
    firstNameValidation: (text) => {
        dispatch(firstNameValidation(text))
    },
    firstNameChange: (char) => {
        dispatch(firstNameChange(char))
    }
})

function FirstNameInput({
    firstName,
    isFirstNameValid,
    firstNameValidation,
    firstNameChange
}) {

    const firstNameInput = useRef(null)

    useEffect(() => {
        firstNameInput.current.focus()
    }, [])


    return(
        <Input
            ref={firstNameInput}
            type='text'
            placeholder='First Name'
            onBlur={() => firstNameValidation(firstName)}
            onChange={e => firstNameChange(e.target.value)}
            value={firstName}
            hasError={!isFirstNameValid}
            errorMessage={msg['firstName']}
            icon={userSvg}
        />
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FirstNameInput)
