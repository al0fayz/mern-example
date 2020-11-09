import React from 'react'
import { BlogItem, Button, Gap } from '../../components';
import './home.scss';
import {useHistory} from 'react-router-dom';

export const Home = () => {
    const history = useHistory();
    return (
        <div>
            <div className="blog-home-wrapper">
                <div className="create-btn">
                    <Button title="create blog" onClick={() => history.push('/create-blog')} />
                </div>
                <Gap height={40} />
                <div className="content-wrapper">
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                </div>
                <div className="pagination">
                    <Button title="Previous" />
                    <Gap width={20} />
                    <Button title="Next" />
                </div>
                <Gap height={20} />
            </div>
        </div>
    )
}
