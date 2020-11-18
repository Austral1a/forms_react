import {sub, getPrice} from '../index'
describe('getPrice function must return appropriate subscription', () => {
    const plans = {
        free: 'free',
        basic: 'basic',
        premium: 'premium'
    }
    describe('country -> us', () => {
        const country = 'us'

        it('plan -> free', () => {
            expect(getPrice(sub, country, plans.free)).toBe('0$')
        })

        it('plan -> basic', () => {
            expect(getPrice(sub, country, plans.basic)).toBe('20$')
        })

        it('plan -> premium', () => {
            expect(getPrice(sub, country, plans.premium)).toBe('60$')
        })
    })

    describe('country -> ua', () => {
        const country = 'ua'

        it('plan -> free', () => {
            expect(getPrice(sub, country, plans.free)).toBe('0₴')
        })

        it('plan -> basic', () => {
            expect(getPrice(sub, country, plans.basic)).toBe('560₴')
        })

        it('plan -> premium', () => {
            expect(getPrice(sub, country, plans.premium)).toBe('1680₴')
        })
    })
})
