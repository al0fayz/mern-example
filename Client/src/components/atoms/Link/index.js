import React from 'react'
import './link.scss';

export const Link = ({title, onClick}) => {
    return (
        <div>
            <p className="link" onClick={onClick}>{title}</p>
        </div>
    )
}
