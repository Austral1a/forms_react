import React from 'react'
import {connect} from 'react-redux'
import {countryChange, Option, Select} from './index'

const mapStateToProps = (state) => ({
    country: state.secondFormReducer.country
})

const mapDispatchToProps = (dispatch) => ({
    countryChange: (country) => {
        dispatch(countryChange(country))
    }
})

function CountrySelect({
    country,
    countryChange
}) {

    const handleCountry = (e) => {
        countryChange(e.target.value)
    }

    return(
        <Select
            defaultValue={country}
            onChange={handleCountry}
        >
            <Option value='us' text='United States' />
            <Option value='ua' text='Ukraine' />
        </Select>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CountrySelect)
