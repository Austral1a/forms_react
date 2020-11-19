import {isInputValid, patterns} from '../../index';
describe('patterns', () => {

    describe('name pattern', () => {

        it("'Peter' must return true", () => {
            expect(isInputValid(patterns.name, 'Peter')).toBeTruthy();
        });

        it("'Bryan2' must return false", () => {
            expect(isInputValid(patterns.name, 'Bryan2')).toBeFalsy();
        });

        it("empty string must return false", () => {
            expect(isInputValid(patterns.name, '')).toBeFalsy();
        });
    });

    describe('email pattern', () => {

        it("'email@e.com' must return true", () => {
            expect(isInputValid(patterns.email, 'email@e.com')).toBeTruthy();
        });

        it("'email@.com' must return false", () => {
            expect(isInputValid(patterns.email, 'email@.com')).toBeFalsy();
        });

        it("'@e.com' must return false", () => {
            expect(isInputValid(patterns.email, '@e.com')).toBeFalsy();
        });

        it("'email@e.' must return false", () => {
            expect(isInputValid(patterns.email, 'email@e.')).toBeFalsy();
        });

        it("'@.' must return false", () => {
            expect(isInputValid(patterns.email, '@.')).toBeFalsy();
        });

        it("'email.com@' must return false", () => {
            expect(isInputValid(patterns.email, 'email.com@')).toBeFalsy();
        });

        it("empty string must return false", () => {
            expect(isInputValid(patterns.email, '')).toBeFalsy();
        });
    });

    describe('phone pattern', () => {

        it("'(123) 456 - 7890' must return true", () => {
            expect(isInputValid(patterns.phone, '(123) 456 - 7890')).toBeTruthy();
        });

        it("'(123) 456 - 789' must return false", () => {
            expect(isInputValid(patterns.phone, '(123) 456 - 789')).toBeFalsy();
        });

        it("'(123 456 - 7890' must return false", () => {
            expect(isInputValid(patterns.phone, '(123 456 - 7890')).toBeFalsy();
        });

        it("'123) 456 - 7890' must return false", () => {
            expect(isInputValid(patterns.phone, '123) 456 - 7890')).toBeFalsy();
        });

        it("'(123)456 - 7890' must return false", () => {
            expect(isInputValid(patterns.phone, '(123)456 - 7890')).toBeFalsy();
        });

        it("'(123) 456- 7890' must return false", () => {
            expect(isInputValid(patterns.phone, '123) 456- 7890')).toBeFalsy();
        });

        it("'(123) 456 -7890' must return false", () => {
            expect(isInputValid(patterns.phone, '(123) 456 -7890')).toBeFalsy();
        });
    });
});
