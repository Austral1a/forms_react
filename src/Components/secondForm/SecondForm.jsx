import React from 'react'
import {
    Form,
    CountrySelect,
    PlanSelect,
    PriceCard,
    ControlPanel} from './index'
import './SecondForm.scss'

function SecondForm() {

    return(
        <Form
            onSubmit={(e) => e.preventDefault()}
            className='form form-second'>
            <CountrySelect />
            <PlanSelect />
            <PriceCard />
            <ControlPanel />
        </Form>
    )
}

export default SecondForm
