import React from 'react'
import {connect} from 'react-redux'
import {Option, planChange, Select} from '../index'


const mapStateToProps = (state) => ({
    plan: state.secondFormReducer.plan
})

const mapDispatchToProps = (dispatch) => ({
    planChange: (plan) => {
        dispatch(planChange(plan))
    }
})

function PlanSelect({
    plan,
    planChange
}) {

    const handlePlan = (e) => {
        planChange(e.target.value)
    }

    return(
        <Select
            defaultValue={plan}
            onChange={handlePlan}
        >
            <Option value='free' text='Free' />
            <Option value='basic' text='Basic' />
            <Option value='premium' text='Premium' />
        </Select>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlanSelect)
