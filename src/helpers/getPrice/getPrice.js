import {subscriptions as subsc} from '../index';

export const getPrice = (subsc, country, plan) => {
    return subsc[country][plan];
};
