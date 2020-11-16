import React from 'react'
import {connect} from 'react-redux'
import {Card, getPrice, subscriptions} from '../index'

const mapStateToProps = (state) => ({
    country: state.secondFormReducer.country,
    plan: state.secondFormReducer.plan
})

function PriceCard({
    country,
    plan
}) {
    return(
        <Card>
            {getPrice(subscriptions, country, plan)} per month
        </Card>

    )
}

export default connect(
    mapStateToProps
)(PriceCard)
