import React from 'react'
import { Button, Gap, Input, TextArea, UploadImage } from '../../components';
import './createBlog.scss';

export const CreateBlog = () => {
    return (
        <div className="create-blog-wrapper">
            <p className="title">Create New Blog</p>
            <Input label="Post Title" />
            <UploadImage />
            <TextArea />
            <Gap height={20} />
            <div className="save-btn">
                <Button title="Save Blog" />
            </div>
        </div>
    )
}
