import React from 'react'

export const Input = ({id, type, className, label, error, placeholder, onChange, onBlur}) => {
    return(
        <div className='pb-2'>
            {label &&
                <label htmlFor={id}>{label}</label>
            }
            <input
                id={id}
                type={type}
                className={className}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error &&
                <label className='text-danger' htmlFor={id}>{error}</label>
            }
        </div>
    )
}