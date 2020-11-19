import {countryChange, planChange} from '../actions';
import {secondFormReducer} from '../reducer';

describe('Second Form reducer', () => {
    const initState = {
        country: 'us',
        plan: 'free'
    };
    const newCountry = {
        country: 'ua'
    };
    const newPlan = {
        plan: 'basic'
    };
    const newState = {
        country: 'ua',
        plan: 'basic'
    };
    it("must return initial state", () => {
        expect(secondFormReducer(undefined, {})).toStrictEqual(initState);
    });

    it('must handle COUNTRY_SELECT_CHANGE', () => {
        const {country} = newCountry
        expect(secondFormReducer({}, countryChange(country))).toStrictEqual(newCountry);
    });

    it('must handle PLAN_SELECT_CHANGE', () => {
        const {plan} = newPlan
        expect(secondFormReducer({}, planChange(plan))).toStrictEqual(newPlan);
    });

    it('must handle whole actions', () => {
        const {country} = newCountry
        const {plan} = newPlan
        const returnedState = {
            ...secondFormReducer({}, countryChange(country)),
            ...secondFormReducer({}, planChange(plan))
        };
        expect(returnedState).toStrictEqual(newState);
    });
});
