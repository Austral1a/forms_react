import React from 'react'
import {connect} from 'react-redux'
import {
    Input,
    phoneChange,
    phoneMask,
    phoneSvg,
    phoneValidation,
    validationMessages as msg
} from './index'

const mapStateToProps = (state) => ({
    isPhoneValid: state.formValidationReducer.isPhoneValid,
    phone: state.firstFormReducer.phone
})

const mapDispatchToProps = (dispatch) => ({
    phoneValidation: (text) =>  {
        dispatch(phoneValidation(text))
    },
    phoneChange: (char) => {
        dispatch(phoneChange(char))
    }
})

function PhoneInput({
    isPhoneValid,
    phone,
    phoneValidation,
    phoneChange
    }) {
    return(
        <Input
            type='text'
            placeholder='Phone'
            onInput={phoneMask}
            onBlur={() => phoneValidation(phone)}
            onChange={e => phoneChange(e.target.value)}
            value={phone}
            hasError={!isPhoneValid}
            errorMessage={msg['phone']}
            icon={phoneSvg}
        />
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhoneInput)
