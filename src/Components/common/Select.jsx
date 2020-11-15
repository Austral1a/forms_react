import React from 'react'
import '../../styles/Select.scss'

function Select({defaultValue, children, onChange}) {
    return (
        <select onChange={onChange} className='select' defaultValue={defaultValue}>
            {children}
        </select>
    )
}

export default Select
