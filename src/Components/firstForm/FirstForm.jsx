import React from 'react'
import {
    Form,
    FirstNameInput,
    LastNameInput,
    EmailInput,
    PhoneInput,
    NextBtn,
    ErrorBoundary
} from './index'
import './FirstForm.scss'
function FirstForm() {

    return(
        <ErrorBoundary>
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
        </ErrorBoundary>
    )
}

export default FirstForm
