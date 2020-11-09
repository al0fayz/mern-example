import React from 'react'
import './input.scss';

export const Input = ({label, ...rest}) => {
    return (
        <div className="wrapper-input">
            <p className="label-input">{label}</p>
            <input className="text-input" {...rest} />
        </div>
    )
}
