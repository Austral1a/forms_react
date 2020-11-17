import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '../index'

function ControlPanel() {
    return(
        <div className='form-second__control'>
            <Link to='/first-form'>
                <Button text='Back' />
            </Link>
            <Button text='Submit' />
        </div>

    )
}

export default ControlPanel
