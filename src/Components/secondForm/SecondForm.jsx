import React,{useState} from 'react'
import {Select, Option, Form, Input, Card, subscriptions, getPrice} from './index'

import './SecondForm.scss'

function SecondForm() {

    const [country, setCountry] = useState('us')
    const [plan, setPlan] = useState('free')

    const handleCountry = (e) => {
        setCountry(e.target.value)
    }

    const handlePlan = (e) => {
        setPlan(e.target.value)
    }

    return(
        <Form className='form form-second'>
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
            <Input
                type='submit'
            />
        </Form>
    )
}

export default SecondForm
