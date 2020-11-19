import {shallow} from 'enzyme';
import {Option} from '../Option';
import toJson from 'enzyme-to-json';

describe('Option component', () => {
    it('Option must match snapshot', () => {
        const wrapper = shallow(<Option />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("must render option's inner text", () => {
        const text = 'this is options';
        const wrapper = shallow(<Option text={text} />);
        expect(wrapper.find('.select__option').text()).toBe(text);
    });

    it("option must have value attribute", () => {
        const value = 'option1';
        const wrapper = shallow(<Option value={value} />);
        expect(wrapper.find('.select__option').prop('value')).toBe(value);
    });
});
