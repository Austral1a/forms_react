import {COUNTRY_SELECT_CHANGE} from '../action-types'

const countryChange = (country) => ({
    type: COUNTRY_SELECT_CHANGE,
    country
})

export default countryChange
