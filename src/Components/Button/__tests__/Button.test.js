import {Button} from '../Button';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Button Component', () => {

    it('Button must match snapshot', () => {
        const wrapper = shallow(<Button />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("must accurate manage 'className' prop", () => {
        const className = 'btn-xs';
        const btnXs = shallow(<Button className={className} />);
        const noClassName = shallow(<Button />);

        expect(btnXs.find('button').prop('className')).toBe(`button ${className}`);
        expect(noClassName.find('button').prop('className')).toBe('button');
    });

    it("must accurate manage 'disable' prop", () => {
        const wrapper = shallow(<Button disabled={true} />);

        expect(wrapper.find('button').prop('disabled')).toBe(true);
    });

    it("must accurate manage 'onClick' prop", () => {
        const initValue = '';
        const newValue = 'new value';
        const state = {
            value: initValue
        };
        const onClick = () => {
            state['value'] = newValue
        };
        const wrapper = shallow(<Button onClick={onClick} />);

        expect(state.value).toBe(initValue);

        wrapper.find('button').simulate('click');
        expect(state.value).toBe(newValue);

    });

    it("must render text of 'text' prop", () => {
        const text = 'this is btn';
        const wrapper = shallow(<Button text={text} />);
        expect(wrapper.find('button').text()).toBe(text);
    });

    it("must not render text of text 'text' prop", () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.find('button').text()).toBe('');
    });
});
