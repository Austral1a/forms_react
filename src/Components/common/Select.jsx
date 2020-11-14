import React from 'react'

function Select({defaultValue, children}) {
    return (
        <select className='select' defaultValue={defaultValue}>
            {children}
        </select>
    )
}

export default Select
