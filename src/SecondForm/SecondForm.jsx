import React from 'react'
import {
    Form,
    CountrySelect,
    PlanSelect,
    ErrorBoundary,
    useExtractValues,
    routes,
    Button, getPrice, subscriptions, Card, Select, planChange, Option, countryChange
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
                <Select
                    defaultValue={vals.country}
                    onChange={(e) => dispatch(countryChange(e.target.value))}
                >
                    <Option value='us' text='United States' />
                    <Option value='ua' text='Ukraine' />
                </Select>
                <Select
                    defaultValue={vals.plan}
                    onChange={(e) => dispatch(planChange(e.target.value))}
                >
                    <Option value='free' text='Free' />
                    <Option value='basic' text='Basic' />
                    <Option value='premium' text='Premium' />
                </Select>>
                <Card>
                    {getPrice(subscriptions, vals.country, vals.plan)} per month
                </Card>
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
