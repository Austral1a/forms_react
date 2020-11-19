import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {Form, Button, Card, Select, Option} from '../Components'
import {subscriptions, getPrice, translations} from '../helpers'
import {planChange, countryChange} from '../Store/SecondForm'
import {useExtractValues} from './index'
import {routes} from '../routes'
import {ErrorBoundary} from '../ErrorBoundary'
import {Link} from 'react-router-dom'
import './SecondForm.scss'

function SecondForm() {

    const {select: {
        country: {us, ua, uaVal, usVal},
        plan: {free, basic, premium, freeVal, basicVal, premiumVal}}
    } = translations
    const {
        country,
        plan
    } = useExtractValues()
    const dispatch = useDispatch()

    const saveCountryInStore = useCallback(
        (e) => dispatch(countryChange(e.target.value)),
        [country]
    )

    const savePlanInStore = useCallback(
        (e) => dispatch(planChange(e.target.value)),
        [plan]
    )
    const onSubmit = (e) => e.preventDefault()

    return(
        <ErrorBoundary>
            <Form
                onSubmit={onSubmit}
                className='form form-second'>
                <Select
                    defaultValue={country}
                    onChange={saveCountryInStore}
                    className='form-second__country'
                >
                    <Option value={us} text={usVal} />
                    <Option value={ua} text={uaVal} />
                </Select>
                <Select
                    defaultValue={plan}
                    onChange={savePlanInStore}
                    className='form-second__plan'
                >
                    <Option value={free} text={freeVal} />
                    <Option value={basic} text={basicVal} />
                    <Option value={premium} text={premiumVal} />
                </Select>
                <Card className='form-second__card'>
                    <p><span className='form-second__price'>{getPrice(subscriptions, country, plan)}</span> per month</p>
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
