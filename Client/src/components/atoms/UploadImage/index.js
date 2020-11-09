import React from 'react'
import { LoginBg } from '../../../assets';
import './uploadImage.scss';

export const UploadImage = () => {
    return (
        <div className="upload">
            <img className="preview" src={LoginBg} alt="preview" />
            <input type="file" />
        </div>
    )
}
