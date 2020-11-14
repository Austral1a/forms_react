import React from 'react'

function Option({
    value,
    defaultValue,
    text
}) {
    return (
        <option
            value={value}
            defaultValue={}
        >
            {text}
        </option>
    )
}

export default Option
