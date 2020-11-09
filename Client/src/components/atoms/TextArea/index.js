import React from 'react'
import './textArea.scss';

export const TextArea = ({...rest}) => {
    return (
        <div>
            <textarea className="text-area" {...rest}>

            </textarea>
        </div>
    )
}
