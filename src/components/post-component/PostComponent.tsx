import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface IProps {
    post: IPost
    getPosts: (id:number) => void
}

const PostComponent: FC<IProps> = ({post, getPosts}) => {
    return (
        <div>
            {post.id} : {post.title} - <button onClick={() => {
            getPosts(post.id);
        }}>show comments of this post</button>

        </div>
    );
};

export default PostComponent;