import {PLAN_SELECT_CHANGE, COUNTRY_SELECT_CHANGE,
        planChange, countryChange} from '../actions';

describe('Second Form actions', () => {
    it('must create an action to save selected country in store', () => {
        const payload = {
            country: 'us'
        };
        const expectedAction = {
            type: COUNTRY_SELECT_CHANGE,
            payload
        };
        expect(countryChange(
            payload.country
        )).toStrictEqual(expectedAction);
    });

    it('must create an action to save selected plan in store', () => {
        const payload = {
            plan: 'basic'
        };
        const expectedAction = {
            type: PLAN_SELECT_CHANGE,
            payload
        };
        expect(planChange(
            payload.plan
        )).toStrictEqual(expectedAction);
    });
});
