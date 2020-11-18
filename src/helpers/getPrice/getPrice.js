const getPrice = (subsc, country, plan) => {
    return subsc[country][plan]
}

export default getPrice
