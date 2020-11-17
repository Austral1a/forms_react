import React from 'react'

function Option({
    value,
    text
}) {
    return (
        <option
            className='select__option'
            value={value}
        >
            {text}
        </option>
    )
}

export default Option
