import React, { useContext } from 'react'
import { Form } from '../components/Form'
import { AlertContext } from '../context/alert/alertContext'

export const NewWorker = () => {

    const alert = useContext(AlertContext)
    
    function submitHandler(e) {
        e.preventDefault()
        alert.show('Сотрудник добавлен в реестр.', 'success')
    }

    function AddRegistryClick(data) {
        if (localStorage.length === 0) {
            let firstPerson = [data]
            localStorage.setItem('persons', JSON.stringify(firstPerson))
        } else {
            let raw = localStorage.getItem('persons')
            let persons = JSON.parse(raw)
            persons.push(data)
            localStorage.setItem('persons', JSON.stringify(persons))
        }
    }

    return (
        <div className='container-lg'>
            <h1>Новый сотрудник</h1>
            <Form
                onFormButtonClick={AddRegistryClick}
                onSubmit={submitHandler}
            />
        </div>
    )
}
