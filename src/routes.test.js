import {routes} from './routes'

describe('routes', () => {
    const firstName = '/first-form'
    const lastName = '/second-form'
    it("route to the first form must return '/first-form'", () => {
        expect(routes.firstForm).toBe(firstName)
    })

    it("route to the second form must return '/second-form'", () => {
        expect(routes.secondForm).toBe(lastName)
    })
})