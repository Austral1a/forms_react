import React from 'react'
import {
    Form,
    CountrySelect,
    PlanSelect,
    PriceCard,
    ErrorBoundary,
    useExtractValues,
    routes,
    Button
} from './index'
import './SecondForm.scss'
import {Link} from 'react-router-dom'

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
                <div className='form-second__control'>
                    <Link to={routes.firstForm}>
                        <Button text='Back' />
                    </Link>
                    <Button text='Submit' />
                </div>
            </Form>
        </ErrorBoundary>
    )
}

export default SecondForm
