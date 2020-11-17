import React from 'react'
import {
    Form,
    CountrySelect,
    PlanSelect,
    PriceCard,
    ControlPanel,
    ErrorBoundary,
    useExtractValues
} from './index'
import './SecondForm.scss'

function SecondForm() {
    const vals = useExtractValues()

    return(
        <ErrorBoundary>
            <Form
                onSubmit={(e) => e.preventDefault()}
                className='form form-second'>
                <CountrySelect country={vals.country} />
                <PlanSelect plan={vals.plan} />
                <PriceCard country={vals.country} plan={vals.plan} />
                <ControlPanel />
            </Form>
        </ErrorBoundary>
    )
}

export default SecondForm
