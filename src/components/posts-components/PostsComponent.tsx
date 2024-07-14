import React, {useEffect, useState} from 'react';
import PostComponent from "../post-component/PostComponent";
import {IPost} from "../models/IPost";
import {getAllPosts, getCommentsOfPostsById} from "../../services/api.service";
import {IComments} from "../models/IComments";
import CommentsComponent from "../comments-component/CommentsComponent";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [comments, setComments] = useState<IComments[]>([])

    useEffect(() => {
        getAllPosts().then((value: IPost[]) => {
            setPosts([...value]);
        });
    }, []);


    const getPosts = (id: number) => {
        getCommentsOfPostsById(id).then(comments => setComments([...comments]));
    }


    return (
        <div>
            <hr/>
            <div>
                {
                    posts.map((post) => (
                        <PostComponent
                            key={post.id}
                            post={post}
                            getPosts={getPosts}
                        />))
                }
            </div>
            <hr/>

            <div>
                <CommentsComponent comments={comments}/>
            </div>

        </div>
    );
};

export default PostsComponent;