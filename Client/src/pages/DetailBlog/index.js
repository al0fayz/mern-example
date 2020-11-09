import React from 'react'
import { RegisterBg } from '../../assets';
import './detailBlog.scss';

export const DetailBlog = () => {
    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={RegisterBg} alt="detail-image" />
            <div className="blog-content-detail">
                <p className="title">Hello World</p>
                <p className="author">alfa</p>
                <p className="desc">Parses a string which represents a color (e.g. #fff, rgb(10, 156, 23)), returns true if the color has been accepted. null will clear the color. If silent is true (Default is false), the button won't change the current color.</p>
            </div>
        </div>
    )
}
