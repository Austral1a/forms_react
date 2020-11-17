import React from 'react'
import {
    Form,
    CountrySelect,
    PlanSelect,
    PriceCard,
    ControlPanel,
    ErrorBoundary
} from './index'
import './SecondForm.scss'

function SecondForm() {

    return(
        <ErrorBoundary>
            <Form
                onSubmit={(e) => e.preventDefault()}
                className='form form-second'>
                <CountrySelect />
                <PlanSelect />
                <PriceCard />
                <ControlPanel />
            </Form>
        </ErrorBoundary>
    )
}

export default SecondForm
