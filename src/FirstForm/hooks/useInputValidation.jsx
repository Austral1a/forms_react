import {useState, useEffect, useMemo} from 'react'
import isInputValid from '../../helpers/isInputValid/isInputValid'
import patterns from '../../helpers/patterns/patterns'

function useInputValidation(patternName, inputName) {
    return useMemo(
        () => {
            return isInputValid(patterns[patternName], inputName)
        }, [inputName]
    )
}

export default useInputValidation
