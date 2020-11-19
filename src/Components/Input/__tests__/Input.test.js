import {Input} from '../Input'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import {isInputValid, patterns} from '../../../helpers'
describe('Input component', function () {

    let wrapper
    const errorMsg = 'Error has occurred'

    beforeEach(() => {
        wrapper = shallow(<Input />)
    })

    it('Input must match snapshot', () => {

        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it("renders '.input-container'", () => {

        expect(wrapper.find('.input-container')).toHaveLength(1)
    })

    it("renders '.input-container__icon' when icon prop is exists", () => {
        wrapper = shallow(<Input icon='path/to/icon' />)
        expect(wrapper.find('.input-container__icon')).toHaveLength(1)
    })

    it("not renders '.input-container__icon' when icon prop is not exists", () => {
        expect(wrapper.find('.input-container__icon')).toHaveLength(0)
    })

    it("must correctly handle 'type' prop", () => {
        const typeText = shallow(<Input type='text' />)
        expect(typeText.find('input').prop('type')).toBe('text')

        const typePassword = shallow(<Input type='password' />)
        expect(typePassword.find('input').prop('type')).toBe('password')
    })

    it("must correctly handle 'placeholder' prop", () => {
        const firstName = shallow(<Input placeholder='First Name' />)
        const lastName = shallow(<Input placeholder='Last Name' />)
        const email = shallow(<Input placeholder='Email' />)

        expect(firstName.find('input').prop('placeholder')).toBe('First Name')
        expect(lastName.find('input').prop('placeholder')).toBe('Last Name')
        expect(email.find('input').prop('placeholder')).toBe('Email')
    })

    it("must correctly handle 'value' prop", () => {
        const kyle = shallow(<Input value='Kyle' />)
        const kyl3 = shallow(<Input value='kyl3' />)

        expect(kyle.find('input').prop('value')).toBe('Kyle')
        expect(kyl3.find('input').prop('value')).toBe('kyl3')
    })

    describe("must correctly handle 'hasError' prop", () => {
        const wrapperWithError = shallow(<Input
            hasError={true}
            errorMessage={errorMsg}
            value='some not g00d value'
        />)
        const wrapperWithNoError = shallow(<Input
            hasError={false}
            errorMessage={errorMsg}
            value='some good value'
        />)

        it("must show error message if 'hasError' prop is true", () => {

            expect(wrapperWithError.find('.input-container__error')).toHaveLength(1)
            expect(wrapperWithError.find('.input-container__error').text()).toBe(errorMsg)
        })

        it("must not show error message if 'hasError' prop is false", () => {

            expect(wrapperWithNoError.find('.input-container__error')).toHaveLength(0)
        })
    })

    it("must correctly handle 'onChange' prop", () => {
        const newValue = 'new value'
        const state = {
            value: ''
        }
        const handleChange = (e) => {
            state['value'] += e.target.value
        }
        const wrapper = shallow(<Input onChange={handleChange} />)
        wrapper.find('.input-container__input').simulate('change', {
            target: {
                value: newValue
            }
        })
        expect(state.value).toBe(newValue)
    })

    describe("must correctly handle 'onBlur' prop", () => {
        let state
        let handleBlur

        beforeEach(() => {
            state = {
                hasError: false
            }
            handleBlur = (pattern, text) => {
                state.hasError = !isInputValid(patterns[pattern], text);
            }
        })
        let wrapper
        const middleEach = (inputVal, pattern) => {
            wrapper = shallow(<Input
                hasError={state.hasError}
                value='some value'
                errorMessage={errorMsg}
                onBlur={() => handleBlur(pattern, inputVal)} />)
            wrapper.find('.input-container__input').simulate('blur')
            wrapper.setProps({hasError: state.hasError})
        }


        describe('validator pattern is name', () => {

            it("input val 'Kyle2' with name pattern validation must render error", () => {
                const inputVal = 'Kyle2'

                middleEach(inputVal, 'name')
                expect(wrapper.find('.input-container__error')).toHaveLength(1)
                expect(wrapper.find('.input-container__error').text()).toBe(errorMsg)
            })

            it("input val 'kyle' with name pattern validation must not render an error", () => {
                const inputVal = 'kyle'

                middleEach(inputVal, 'name')
                expect(wrapper.find('.input-container__error')).toHaveLength(0)
            })
        })


        describe('validator pattern is email',() => {

            it("input val 'email@em.com' must not render error", () => {
                const inputVal = 'email@em.com'

                middleEach(inputVal, 'email')
                expect(wrapper.find('.input-container__error')).toHaveLength(0)

            })

            it("input val 'email@.com must render an error'", () => {
                const inputVal = 'email@.com'

                middleEach(inputVal, 'email')
                expect(wrapper.find('.input-container__error')).toHaveLength(1)
                expect(wrapper.find('.input-container__error').text()).toBe(errorMsg)
            })

            it("input val 'emal@com' must render an error", () => {
                const inputVal = 'emal@com'

                middleEach(inputVal, 'email')
                expect(wrapper.find('.input-container__error')).toHaveLength(1)
                expect(wrapper.find('.input-container__error').text()).toBe(errorMsg)
            })
        })

        describe('validator pattern is phone', () => {

            it("input val '(123) 456 - 7890' must not render an error", () => {
                const inputVal = '(123) 456 - 7890'

                middleEach(inputVal, 'phone')
                expect(wrapper.find('.input-container__error')).toHaveLength(0)
            })

            it("input val '123 456 - 7890' must render an error", () => {
                const inputVal = '123 456 - 7890'

                middleEach(inputVal, 'phone')
                expect(wrapper.find('.input-container__error')).toHaveLength(1)
                expect(wrapper.find('.input-container__error').text()).toBe(errorMsg)
            })


        })
    })
})
