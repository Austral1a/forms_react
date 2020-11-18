import React from 'react'
import {Link} from 'react-router-dom'
import {Button, routes} from '../index'


function ControlPanel() {
    return(
        <div className='form-second__control'>
            <Link to={routes.firstForm}>
                <Button text='Back' />
            </Link>
            <Button text='Submit' />
        </div>

    )
}

export default ControlPanel
