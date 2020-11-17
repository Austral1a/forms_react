import React from 'react'
import './Select.scss'

function Select({defaultValue, children, onChange}) {
    return (
        <select onChange={onChange} className='select' defaultValue={defaultValue ? defaultValue : null}>
            {children}
        </select>
    )
}

export default Select
