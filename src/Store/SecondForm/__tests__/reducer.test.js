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
        expect(secondFormReducer({}, countryChange(newCountry.country))).toStrictEqual(newCountry);
    });

    it('must handle PLAN_SELECT_CHANGE', () => {
        expect(secondFormReducer({}, planChange(newPlan.plan))).toStrictEqual(newPlan);
    });

    it('must handle whole actions', () => {
        const returnedState = {
            ...secondFormReducer({}, countryChange(newCountry.country)),
            ...secondFormReducer({}, planChange(newPlan.plan))
        };
        expect(returnedState).toStrictEqual(newState);
    });
});
