import {shallow} from 'enzyme';
import {Input} from '../../../Components/Input';
import {phoneMask} from '../../index';

describe('Phone Mask', () => {
    it("phone mask must executing", () => {
        const phoneMask = jest.fn()

        const wrapper = shallow(<Input onInput={phoneMask} />)

        wrapper.find('input').simulate('input');
        wrapper.find('input').simulate('input');
        wrapper.find('input').simulate('input');
        expect(phoneMask).toHaveBeenCalledTimes(3);
    });
});
