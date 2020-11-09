import React from 'react'
import { LoginBg } from '../../../assets';
import './blogItem.scss';

export const BlogItem = () => {
    return (
        <div>
            <div className="blog-wrapper">
                <img className="blog-img" src={LoginBg} alt="blog-post" />
                <div className="blog-content">
                    <p className="title">Hello World</p>
                    <p className="author">alfa</p>
                    <p className="desc">Parses a string which represents a color (e.g. #fff, rgb(10, 156, 23)), returns true if the color has been accepted. null will clear the color. If silent is true (Default is false), the button won't change the current color.</p>
                </div>
            </div>
        </div>
    )
}
