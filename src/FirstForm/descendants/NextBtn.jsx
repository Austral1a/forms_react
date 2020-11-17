import React from 'react'
import {Button, Link} from '../index'

function NextBtn({disabled, onClick}) {

    return(
        <Button
            onClick={onClick}
            disabled={disabled}
            text={<Link to='/second-form'>Next</Link>}
        />
    )
}

export default NextBtn
