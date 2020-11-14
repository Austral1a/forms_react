import React from 'react'
import {Select, Option, Form, Input} from './index'

import './SecondForm.scss'

function SecondForm() {
    return(
        <Form className='form form-second'>
            <Select defaultValue='us'>
                <Option value='us' text='United States' />
                <Option value='ua' text='Ukraine' />
            </Select>
            <Select defaultValue='free'>
                <Option value='free' text='Free' />
                <Option value='basic' text='Basic' />
                <Option value='premium' text='Premium' />
            </Select>
            <Input
                type='submit'
            />
        </Form>
    )
}

export default SecondForm
