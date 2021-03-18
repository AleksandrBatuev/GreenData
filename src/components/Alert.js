import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { AlertContext } from '../context/alert/alertContext'

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    if(!alert.visible) {
        return null
    }

    return (
        <div className={`container mt-2 alert alert-${alert.type || 'warning'} alert-dismissible`}>
            {alert.text} 
            <Link to={'/'} onClick={hide}> (Вернуться на главную)</Link>
            <button onClick={hide} type='button' className='close' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
            </button>
        </div>
    )
}