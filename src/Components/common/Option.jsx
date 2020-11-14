import React from 'react'

function Option({
    value,
    selected,
    text
}) {
    return (
        <option
            value={value}
            selected={selected}
        >
            {text}
        </option>
    )
}

export default Option
