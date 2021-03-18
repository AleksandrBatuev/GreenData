import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Registry = () => {
    let raw = localStorage.getItem('persons')
    const [data, setData] = useState(JSON.parse(raw))

    function removePersonClick(e) {
        let id = e.target.id
        let newData = data
        newData.splice(id, 1)
        localStorage.setItem('persons', JSON.stringify(newData))
        setData(prevData => prevData = newData)
    }

    function redPencilPersonIndexClick(e) {
        let PersonId = String(e.target.id)
        localStorage.setItem('PersonId', PersonId)
    }

    if (localStorage.length === 0) {
        return (
            <div className='container'>
                <h1 className='text-muted'>
                    Данных нет
                </h1>
            </div>
        )
    }

    return (
        <div>
            <table className='table'>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Фамилия</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Отчество</th>
                        <th scope="col">Должность</th>
                        <th scope="col">Дата рождения</th>
                        <th scope="col">Пол</th>
                        <th scope="col">Дата приема на работу</th>
                        <th scope="col">Дата увольнения</th>
                        <th scope="col">Наличие прав</th>
                        <th scope="col">Редактировать</th>
                    </tr>
                </thead>
                {data.map((person, index) => {
                    return (
                        <tbody key={index}>
                            <tr>
                                <th scope='row'>{person.family}</th>
                                <th>{person.name}</th>
                                <th>{person.patronymic}</th>
                                <th>{person.position}</th>
                                <th>{person.birthday}</th>
                                <th>{person.gender}</th>
                                <th>{person.employmentDate}</th>
                                <th>{person.dateOfDismissal}</th>
                                <th>{person.license}</th>
                                <th>
                                    <Link
                                        to={'/red-pencil'}
                                        onClick={redPencilPersonIndexClick}
                                        id={index}
                                        className='btn btn-info'
                                    >
                                        Редактировать
                                    </Link>
                                </th>
                                <th>
                                    <Link
                                        to={''}
                                        onClick={removePersonClick}
                                        id={index}
                                        className='btn btn-danger'
                                    >
                                        &times;
                                    </Link>
                                </th>

                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}