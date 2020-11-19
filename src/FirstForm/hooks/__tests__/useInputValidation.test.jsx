import React from 'react'
import {useInputValidation} from '../index'
import {renderHook} from '@testing-library/react-hooks'
import {patternNames} from '../../../helpers'

describe('', () => {
    const {name, email, phone} = patternNames

    describe('name pattern', () => {
        it("hook with input name 'kyle' must return true", () => {
            const firstName = 'kyle'
            const {result} = renderHook(() => useInputValidation(name, firstName))
            expect(result.current).toBe(true)
        })

        it("hook with input name 'j0hn' must return false", () => {
            const firstName = 'j0hn'
            const {result} = renderHook(() => useInputValidation(name, firstName))
            expect(result.current).toBe(false)
        })
    })

    describe('email pattern', () => {
        it("hook with input name 'email@d.com' must return true", () => {
            const emailVal = 'email@d.com'
            const {result} = renderHook(() => useInputValidation(email, emailVal))
            expect(result.current).toBe(true)
        })

        it("hook with input name 'email@.com' must return false", () => {
            const emailVal = 'email@.com'
            const {result} = renderHook(() => useInputValidation(email, emailVal))
            expect(result.current).toBe(false)
        })

        it("hook with input name 'email@d.' must return false", () => {
            const emailVal = 'email@d.'
            const {result} = renderHook(() => useInputValidation(email, emailVal))
            expect(result.current).toBe(false)
        })

        it("hook with input name '@d.com' must return false", () => {
            const emailVal = '@d.com'
            const {result} = renderHook(() => useInputValidation(email, emailVal))
            expect(result.current).toBe(false)
        })
    })

    describe('phone pattern', () => {
        it("hook with input name '(123) 456 - 7890' must return true", () => {
            const phoneVal = '(123) 456 - 7890'
            const {result} = renderHook(() => useInputValidation(phone, phoneVal))
            expect(result.current).toBe(true)
        })

        it("hook with input name '123 456 - 7890' must return false", () => {
            const phoneVal = '123 456 - 7890'
            const {result} = renderHook(() => useInputValidation(phone, phoneVal))
            expect(result.current).toBe(false)
        })

        it("hook with input name '(123)456 - 7890' must return false", () => {
            const phoneVal = '(123)456 - 7890'
            const {result} = renderHook(() => useInputValidation(phone, phoneVal))
            expect(result.current).toBe(false)
        })

        it("hook with input name '(123) 456-7890' must return false", () => {
            const phoneVal = '(123) 456-7890'
            const {result} = renderHook(() => useInputValidation(phone, phoneVal))
            expect(result.current).toBe(false)
        })

        it("hook with input name '(123) 456 7890' must return false", () => {
            const phoneVal = '(123) 456 7890'
            const {result} = renderHook(() => useInputValidation(phone, phoneVal))
            expect(result.current).toBe(false)
        })

        it("hook with input name '(123) 456 - 789' must return false", () => {
            const phoneVal = '(123)456 - 789'
            const {result} = renderHook(() => useInputValidation(phone, phoneVal))
            expect(result.current).toBe(false)
        })
    })
})

