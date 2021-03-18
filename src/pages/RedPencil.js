import React, { useContext, useState } from 'react'
import { Form } from '../components/Form'
import { AlertContext } from '../context/alert/alertContext'

export const RedPencil = () => {

    let raw = localStorage.getItem('persons')
    const [personData, setPersonData] = useState(JSON.parse(raw))
    const id = localStorage.getItem('PersonId')
    const alert = useContext(AlertContext)

    function submitHandler(e) {
        e.preventDefault()
        alert.show('Правки внесены!', 'success')
    }

    function redPencilPersonClick(data) {
        personData.splice(id, 1, data)
        localStorage.setItem('persons', JSON.stringify(personData))
        setPersonData(prevData => prevData = personData)
        localStorage.removeItem('PersonId')
        //window.location.href = 'http://localhost:3000/'
    }

    return (
        <div className='container-lg'>
            <h1>Редактирование сотрудника</h1>
            <Form 
            onFormButtonClick={redPencilPersonClick}
            onSubmit={submitHandler}
            />
        </div>
    )
}