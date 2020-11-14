import React from 'react'
import '../../styles/Select.scss'

function Select({defaultValue, children}) {
    return (
        <select className='select' defaultValue={defaultValue}>
            {children}
        </select>
    )
}

export default Select
