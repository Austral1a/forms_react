export const SAVE_VALUES_IN_STORE = 'SAVE_VALUES_IN_STORE'

export const saveValues = (firstName, lastName, email, phone) => ({
    type: SAVE_VALUES_IN_STORE,
    payload: {
        firstName,
        lastName,
        email,
        phone
    }
})
