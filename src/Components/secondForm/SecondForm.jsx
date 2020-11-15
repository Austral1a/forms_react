import React,{useState} from 'react'
import {Select, Option, Form, Input, Card, subscriptions, getPrice, countryChange} from './index'
import Button from '../common/Button'
import {connect} from 'react-redux'


import './SecondForm.scss'
import {Link} from 'react-router-dom'

const mapStateToProps = (state) => ({
    country: state.secondFormReducer.country
})

const mapDispatchToProps = (dispatch) => ({
    countryChange: (country) => {
        dispatch(countryChange(country))
    }
})

function SecondForm({
    country,
    countryChange
}) {

    // const [country, setCountry] = useState('us')
    const [plan, setPlan] = useState('free')

    const handleCountry = (e) => {
        countryChange(e.target.value)
    }

    const handlePlan = (e) => {
        setPlan(e.target.value)
    }

    return(
        <Form
            onSubmit={(e) => e.preventDefault()}
            className='form form-second'>
            <Select
                defaultValue='us'
                onChange={handleCountry}
            >
                <Option value='us' text='United States' />
                <Option value='ua' text='Ukraine' />
            </Select>
            <Select
                defaultValue='free'
                onChange={handlePlan}
            >
                <Option value='free' text='Free' />
                <Option value='basic' text='Basic' />
                <Option value='premium' text='Premium' />
            </Select>
            <Card>
                {getPrice(subscriptions, country, plan)} per month
            </Card>
            <div className='form-second__control'>
                <Button text={<Link to='/first-form'>Back</Link>} />
                <Button text='Submit' />
            </div>
        </Form>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(SecondForm)
