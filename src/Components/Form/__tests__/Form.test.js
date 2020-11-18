import {shallow} from 'enzyme'
import Form from '../Form'

describe('Form component', () => {
    it('must render children', () => {
        const text = 'children'
        const wrapper = shallow(<Form><p>{text}</p></Form>)

        expect(wrapper.find('p')).toHaveLength(1)
        expect(wrapper.find('p').text()).toBe(text)
    })

    const defClassName = 'form'
    it("if prop 'className' exists, form should have that class", () => {
        const wrapper = shallow(<Form className='form-first' />)


        expect(wrapper.find('form').prop('className')).toBe(`${defClassName} form-first`)
    })

    it("if prop 'className' is not exists, form should have default class", () => {
        const wrapper = shallow(<Form />)

        expect(wrapper.find('form').prop('className')).toBe(defClassName)
    })

    it("must correctly handle 'onSubmit' prop", () => {
        const newValue = 'new value'
        const state = {
            value: ''
        }
        const handleSubmit = () => {
            state['value'] = newValue
        }
        const wrapper = shallow(<Form onSubmit={handleSubmit}/>)
        expect(state.value).toBe('')
        wrapper.find('form').simulate('submit')
        expect(state.value).toBe(newValue)
    })
})