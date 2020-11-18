import {phoneMask} from '../masks'

import {shallow} from 'enzyme'
import Input from '../../../Components/Input/Input'

describe('Phone Mask', () => {
    it("phone mask must executing", () => {
        const phoneMask = jest.fn()

        const wrapper = shallow(<Input onInput={phoneMask} />)

        wrapper.find('input').simulate('input')
        wrapper.find('input').simulate('input')
        wrapper.find('input').simulate('input')
        expect(phoneMask).toHaveBeenCalledTimes(3)
    })
})