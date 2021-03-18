import React, { useState, useEffect} from 'react'
import { Input } from '../components/Input'
import { useInput } from '../hooks/inputHook'

export const Form = ({ onFormButtonClick, onSubmit }) => {

    const [valid, setValid] = useState(true)
    const family = useInput('', { empty: true, name: true })
    const name = useInput('', { empty: true, name: true })
    const patronymic = useInput('', { empty: true, name: true })
    const birthday = useInput('', { empty: true })
    const employmentDate = useInput('', { empty: true, date: true }, birthday.value)
    const dateOfDismissal = useInput('', { empty: true, date: true }, employmentDate.value)
    const position = useInput('', { empty: true })
    const [gender, setGender] = useState('Мужчина')
    const [license, setLicense] = useState(false)
    const [data, setData] = useState('')

    useEffect(() => {
        if (!valid) {
            setData(prevData => prevData = {
                family: family.value,
                name: name.value,
                patronymic: patronymic.value,
                position: position.value,
                birthday: birthday.value,
                gender: gender,
                employmentDate: employmentDate.value,
                dateOfDismissal: dateOfDismissal.value,
                license: license ? 'Есть' : 'Нет'
            })
        }
    }, [valid, family.value, name.value, patronymic.value, position.value, birthday.value, gender, employmentDate.value, dateOfDismissal.value, license])

    useEffect(() => {
        if (!family.errorEmpty && !family.errorName &&
            !name.errorEmpty && !name.errorName &&
            !patronymic.errorEmpty && !patronymic.errorName &&
            !birthday.errorEmpty && !birthday.errorName &&
            !employmentDate.errorEmpty && !employmentDate.errorDate &&
            !dateOfDismissal.errorEmpty && !dateOfDismissal.errorDate &&
            !position.errorEmpty && !position.errorName && position.dirty) {
            setValid(false)
        } else {
            setValid(true)
        }
    }, [family, name, patronymic, birthday, employmentDate, dateOfDismissal, position, gender, license])

    return (
        <form onSubmit={onSubmit} className='form-group'>
            <Input
                type='text'
                error={(family.dirty && family.errorEmpty) || (family.dirty && family.errorName)}
                onChange={(e) => family.onChange(e)}
                onBlur={(e) => family.onBlur(e)}
                value={family.value}
                className='form-control'
                placeholder='Введите Фамилию'
            />
            <Input
                type='text'
                error={(name.dirty && name.errorEmpty) || (name.dirty && name.errorName)}
                onChange={(e) => name.onChange(e)}
                onBlur={(e) => name.onBlur(e)}
                value={name.value}
                className='form-control'
                placeholder='Введите Имя'
            />
            <Input
                type='text'
                error={(patronymic.dirty && patronymic.errorEmpty) || (patronymic.dirty && patronymic.errorName)}
                onChange={(e) => patronymic.onChange(e)}
                onBlur={(e) => patronymic.onBlur(e)}
                value={patronymic.value}
                className='form-control'
                placeholder='Введите Отчество'
            />
            <select
                onChange={(e) => position.onChange(e)}
                onBlur={(e) => position.onBlur(e)}
                value={position.value}
                className='form-control mt-2 mb-2'
                aria-label='Default select example' >
                <option value='' disabled>Выберете должность</option>
                <option value='Аналитик'>Аналитик</option>
                <option value='Тестеровщик'>Тестеровщик</option>
                <option value='Разработчик'>Разработчик</option>
            </select>
            <label className='text-danger'>{position.dirty && position.errorEmpty}</label>
            <Input
                type='date'
                error={birthday.dirty && birthday.errorEmpty}
                onChange={(e) => birthday.onChange(e)}
                onBlur={(e) => birthday.onBlur(e)}
                value={birthday.value}
                className='form-control'
                label='Введите дату рождения'
            />
            <hr />
            <div className="form-check">
                <input onClick={(e) => setGender(e.target.value)} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Мужчина" defaultChecked />
                <label className="form-check-label" htmlFor="exampleRadios1">
                    Мужчина
                    </label>
            </div>
            <div className="form-check">
                <input onClick={(e) => setGender(e.target.value)} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="Женщина" />
                <label className="form-check-label" htmlFor="exampleRadios2">
                    Женщина
                    </label>
            </div>
            <hr />
            <Input
                type='date'
                error={(employmentDate.dirty && employmentDate.errorEmpty) || (employmentDate.dirty && employmentDate.errorDate)}
                onChange={(e) => employmentDate.onChange(e)}
                onBlur={(e) => employmentDate.onBlur(e)}
                value={employmentDate.value}
                className='form-control'
                label='Введите дату приема на работу'
            />
            <Input
                type='date'
                error={(dateOfDismissal.dirty && dateOfDismissal.errorEmpty) || (dateOfDismissal.dirty && dateOfDismissal.errorDate)}
                onChange={(e) => dateOfDismissal.onChange(e)}
                onBlur={(e) => dateOfDismissal.onBlur(e)}
                value={dateOfDismissal.value}
                className='form-control'
                label='Введите дату увольнения'
            />
            <div className="form-check pb-2">
                <input onClick={(e) => setLicense(!license)} className="form-check-input" type="checkbox" id="inlineCheckbox" />
                <label className="form-check-label" htmlFor="inlineCheckbox">Водительские права</label>
            </div>
            <button
                className="btn btn-success"
                onClick={() => onFormButtonClick(data)}
                disabled={valid}
            >
                Занести в реестр
            </button>
        </form>
    )
}
