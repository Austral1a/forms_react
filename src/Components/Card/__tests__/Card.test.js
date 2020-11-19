import {Card} from '../Card'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
describe('Card Component' ,() => {
    it('Card must match snapshot', () => {
        const wrapper = shallow(<Card />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it("must set style", () => {
        const bgColor = '#fff'
        const wrapper = shallow(<Card style={{backgroundColor: bgColor}} />)

        expect(wrapper.find('.card').prop('style').backgroundColor).toBe(bgColor)
    })

    it("if className prop exists must set additional className", () => {
        const className = 'card-first'
        const wrapper = shallow(<Card className={className} />)

        expect(wrapper.find('.card').prop('className')).toBe(`card ${className}`)
    })

    it('if className prop is not exists must not set additional className', () => {
        const wrapper = shallow(<Card />)

        expect(wrapper.find('.card').prop('className')).toBe('card')
        expect(wrapper.find('.card').prop('className')).not.toBe('card ')
    })

    it("must render children", () => {
        const text = 'child'
        const wrapper = shallow(<Card><p>{text}</p></Card>)

        expect(wrapper.find('p')).toHaveLength(1)
        expect(wrapper.find('p').text()).toBe(text)
        expect(wrapper.find('p').text()).not.toBe(text + ' ')
    })
})