import React from 'react'
import '../../styles/Form.scss'

function Form({
                  children,
                  onSubmit,
                  action
              }) {
    return(
        <form
            className='form'
            action={action}
            onSubmit={onSubmit}
        >
            {children}
        </form>
    )
}

export default Form
