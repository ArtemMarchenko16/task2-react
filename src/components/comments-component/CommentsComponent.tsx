import React, {FC} from 'react';
import {IComments} from "../models/IComments";

interface IProps {
    comments: IComments[]
}

const CommentsComponent: FC<IProps> = ({comments}) => {
    return (
        <ul>
            {
                comments.map(value => <li key={value.id}>{value.id}: {value.name}</li>)
            }
        </ul>
    );
};

export default CommentsComponent