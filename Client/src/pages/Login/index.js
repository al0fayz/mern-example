import React from 'react'
import { LoginBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';

export const Login = () => {
    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginBg} alt="images background" className="bg-image" />
            </div>
            <div className="right">
                <h2 className="title">Login</h2>
                <Input label="Email" placeholder="Email" />
                <Gap height={20} />
                <Input label="Password" placeholder="Password" />
                <Gap height={40} />
                <Button title="login" />

                <Link title="create account" />
            </div>
        </div>
    )
}
