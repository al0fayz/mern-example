import React from 'react'
import './header.scss';
import { useHistory } from 'react-router-dom';

export const Header = () => {
    const history = useHistory();

    return (
        <div className="header">
            <p className="logo">Alfa-Apps</p>
            <p className="menu-item" onClick={() => history.push('/login')}>Logout</p>
        </div>
    )
}
