import React from 'react'
import {Card, getPrice, subscriptions} from '../index'

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

export default PriceCard
