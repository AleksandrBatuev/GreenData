import { useState, useEffect } from 'react'

export const useValidation = (value, validations, dateValue) => {
    const [errorEmpty, setErrorEmpty] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorDate, setErrorDate] = useState('')

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'empty':
                    value ? setErrorEmpty('') : setErrorEmpty('Поле не может быть пустым')
                    break;
                case 'name':
                    let re = /^[A-zА-яЁё]+$/
                    let textValid = re.test(value)
                    textValid ? setErrorName('') : setErrorName('Могут быть введены только буквы')
                    break;
                case 'date':
                    value > dateValue ? setErrorDate('') : setErrorDate('Ошибка в датах')
                    break;
                default:
                    break;
            }
        }
    }, [value, validations, dateValue])

    return {
        errorEmpty,
        errorName,
        errorDate
    }
}