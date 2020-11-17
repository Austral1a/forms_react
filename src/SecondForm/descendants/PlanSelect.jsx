import React from 'react'
import {Option, planChange, Select} from '../index'
import {useDispatch} from 'react-redux'

function PlanSelect({plan}) {
    const dispatch = useDispatch()

    return(
        <Select
            defaultValue={plan}
            onChange={(e) => dispatch(planChange(e.target.value))}
        >
            <Option value='free' text='Free' />
            <Option value='basic' text='Basic' />
            <Option value='premium' text='Premium' />
        </Select>
    )
}

export default PlanSelect
