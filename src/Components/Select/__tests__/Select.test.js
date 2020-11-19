import {Select} from '../Select';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

describe("Select component", () => {
    it('Select must match snapshot', () => {
        const wrapper = shallow(<Select />)
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("must render children", () => {
        const children = <option value="1">1</option>;
        const wrapper = shallow(<Select>{children}</Select>);

        expect(wrapper.find('select').contains(children)).toBeTruthy();
    });

    describe("defaultValue prop", () => {
        it("must set 'defaultValue' prop", () => {
            const defValue = 'us';
            const wrapper = shallow(<Select defaultValue={defValue} />);

            expect(wrapper.find('select').prop('defaultValue')).toBe(defValue);
        });

        it("must not set 'defaultValue' prop", () => {
            const wrapper = shallow(<Select />);

            expect(wrapper.find('select').prop('defaultValue')).toBe(null);
        });
    });

    it("must accurate manage 'onChange' prop", () => {
        const newValue = 'ua';
        const initValue = 'us';
        const state = {
            value: initValue
        };

        const onChange = () => {
            state['value'] = newValue
        };

        const wrapper = shallow(<Select onChange={onChange} />)
        expect(state.value).toBe(initValue);
        wrapper.find('select').simulate('change');
        expect(state.value).toBe(newValue);
    });
});
