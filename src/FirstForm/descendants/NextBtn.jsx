import React from 'react'
import {Button, Link} from '../index'

function NextBtn({disabled, onClick}) {

    return(
        <Link to='/second-form'>
            <Button
                onClick={onClick}
                disabled={disabled}
                text='Next'
            />
        </Link>
    )
}

export default NextBtn
