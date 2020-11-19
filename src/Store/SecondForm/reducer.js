import {COUNTRY_SELECT_CHANGE, PLAN_SELECT_CHANGE} from './index';

export const initState = {
    country: 'us',
    plan: 'free'
};

export const secondFormReducer = (state = initState, action) => {
    switch (action.type) {
        case COUNTRY_SELECT_CHANGE:
            const {payload: {country}} = action;

            return {
                ...state,
                country: country
            };
        case PLAN_SELECT_CHANGE:
            const {payload: {plan}} = action;

            return {
                ...state,
                plan: plan
            };
        default:
            return state;
    }
};

