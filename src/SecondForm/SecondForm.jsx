import React, {useCallback} from 'react'
import {
    Form,
    ErrorBoundary,
    useExtractValues,
    routes,
    Button,
    getPrice,
    subscriptions,
    Card,
    Select,
    planChange,
    Option,
    countryChange,
    Link
} from './index'
import './SecondForm.scss'
import {useDispatch} from 'react-redux'

function SecondForm() {
    const {
        country,
        plan
    } = useExtractValues()
    const dispatch = useDispatch()

    const saveCountryInStore = useCallback(
        (country) => dispatch(countryChange(country)),
        [country]
    )

    const savePlanInStore = useCallback(
        (plan) => dispatch(planChange(plan)),
        [plan]
    )

    return(
        <ErrorBoundary>
            <Form
                onSubmit={(e) => e.preventDefault()}
                className='form form-second'>
                <Select
                    defaultValue={country}
                    onChange={(e) => saveCountryInStore(e.target.value)}
                    className='form-second__country'
                >
                    <Option value='us' text='United States' />
                    <Option value='ua' text='Ukraine' />
                </Select>
                <Select
                    defaultValue={plan}
                    onChange={(e) => savePlanInStore(e.target.value)}
                    className='form-second__plan'
                >
                    <Option value='free' text='Free' />
                    <Option value='basic' text='Basic' />
                    <Option value='premium' text='Premium' />
                </Select>
                <Card className='form-second__price'>
                    {getPrice(subscriptions, country, plan)} per month
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
