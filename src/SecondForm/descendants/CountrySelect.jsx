import React from 'react'
import {countryChange, Option, Select} from '../index'
import {useDispatch} from 'react-redux'

function CountrySelect({country}) {
    const dispatch = useDispatch()

    return(
        <Select
            defaultValue={country}
            onChange={(e) => dispatch(countryChange(e.target.value))}
        >
            <Option value='us' text='United States' />
            <Option value='ua' text='Ukraine' />
        </Select>
    )
}

export default CountrySelect
