import React from 'react'
import { RegisterBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import './register.scss';
import { useHistory } from 'react-router-dom';

export const Register = () => {
    const history = useHistory();
    
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} alt="images background" className="bg-image" />
            </div>
            <div className="right">
                <h2 className="title">Register</h2>
                <Input label="Full Name" placeholder="Full Name"/>
                <Gap height={20} />
                <Input label="Email" placeholder="Email" />
                <Gap height={20} />
                <Input label="Password" placeholder="Password" />
                <Gap height={40} />
                <Button title="register" />

                <Link title="Back to login" onClick={() => history.push('/login')} />
            </div>
        </div>
    )
}
