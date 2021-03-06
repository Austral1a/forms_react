export const COUNTRY_SELECT_CHANGE = 'COUNTRY_SELECT_CHANGE';
export const PLAN_SELECT_CHANGE = 'PLAN_SELECT_CHANGE';

export const countryChange = (country) => ({
    type: COUNTRY_SELECT_CHANGE,
    payload: {
        country
    }
});

export const planChange = (plan) => ({
    type: PLAN_SELECT_CHANGE,
    payload: {
        plan
    }
});
