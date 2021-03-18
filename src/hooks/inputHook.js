import {useState} from 'react'
import { useValidation } from './validHook'

export const useInput = (initialValue, validations, date) => {
    const [value, setValue] = useState(initialValue)
    const [dirty, setDirty] = useState(false)
    const valid = useValidation(value, validations, date)

    const onChange = (e) => {
        setValue(prevValue => prevValue = e.target.value)
    }

    const onBlur = (e) => {
        setDirty(prevDirty => prevDirty = true)
    }

    return {
        value,
        onChange,
        onBlur,
        dirty,
        ...valid
    }
}