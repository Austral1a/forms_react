import {shallow} from 'enzyme'
import Option from '../common/Option/Option'

describe('Option component', () => {
    it("must render option's inner text", () => {
        const text = 'this is options'
        const wrapper = shallow(<Option text={text} />)
        expect(wrapper.find('.select__option').text()).toBe(text)
        expect(wrapper.find('.select__option').text()).not.toBe(" " + text)
    })

    it("option must have value attribute", () => {
        const value = 'option1'
        const wrapper = shallow(<Option value={value} />)
        expect(wrapper.find('.select__option').prop('value')).toBe(value)
    })
})