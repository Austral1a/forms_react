import React from 'react'
import {Select, Option, Form, Input} from './index'

import './SecondForm.scss'

function SecondForm() {
    return(
        <Form className='form form-second'>
            <Select>
                <Option selected={true} value='us' text={'United States'} />
                <Option value='ua' text={'Ukraine'} />
            </Select>
            <Select>
                <Option selected={true} value='free' text='Free' />
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
