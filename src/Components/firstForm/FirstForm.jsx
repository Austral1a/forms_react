import React from 'react'
import {
    Form,
    FirstNameInput,
    LastNameInput,
    EmailInput,
    PhoneInput,
    NextBtn
} from './index'
import './FirstForm.scss'
function FirstForm() {

    return(
        <Form
            onSubmit={(e) => {
                e.preventDefault()
            }}
            className='form form-first'>
            <FirstNameInput />
            <LastNameInput />
            <EmailInput />
            <PhoneInput />
            <NextBtn />
        </Form>
    )
}

export default FirstForm
