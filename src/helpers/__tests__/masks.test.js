import {phoneMask} from '../masks'

import {shallow} from 'enzyme'
import Input from '../../Components/common/Input/Input'

describe('Phone Mask', () => {
    it("entered '1234' must replaced by '(123) 4'", () => {
        let val = ''
          const e = {
            target: {value: val}
        }
        // const wrapper = shallow(<Input value={val} onInput={phoneMask} />)

        e.simulate('input', {
            target: {value: '1'}
        })
        expect(e).toBe('ss')
        wrapper.find('input').simulate('input', {
            target: {value: '12'}
        })
        wrapper.find('input').simulate('input', {
            target: {value: '123'}
        })
        wrapper.find('input').simulate('input', {
            target: {value: '1234'}
        })
        expect(wrapper.find('input').props().value).toBe('(123) 4')
    })
})