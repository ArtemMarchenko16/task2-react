import axios from 'axios';


let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',

});

const getAllPosts = async () => {
    return await axiosInstance.get('/posts').then((response) => response.data);
}
let getCommentsOfPostsById = async (id: number) => {
    return await axiosInstance.get('/posts/' + id + '/comments').then((response) => response.data)
};

export {getAllPosts, getCommentsOfPostsById}