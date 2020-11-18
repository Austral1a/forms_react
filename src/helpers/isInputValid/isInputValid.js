const isInputValid = (validator, text) => {
    return validator.test(text);
};

export default isInputValid;
