import React from 'react'
import '../../styles/Form.scss'

function Form({
                  children,
                  onSubmit,
                  action,
                  className
              }) {
    return(
        <form
            className={className ? className : ''}
            action={action}
            onSubmit={onSubmit}
        >
            {children}
        </form>
    )
}

export default Form
