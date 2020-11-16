import {useState, useEffect, useMemo} from 'react'
import isInputValid from '../../../helpers/isInputValid'
import patterns from '../../../helpers/patterns'

function useInputValidation(patternName, inputName) {
    const [isValid, setIsValid] = useState(false)

    const isValidMemo = useMemo(
        () => {
            return isInputValid(patterns[patternName], inputName)
        }, [inputName]
    )
    useEffect(() => {
        if(isValidMemo) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    })
    return isValid
}

export default useInputValidation
