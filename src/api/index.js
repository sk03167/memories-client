import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'})

// const API = axios.create({baseURL:process.env.REACT_APP_API_SERVER})
// const url = process.env.REACT_APP_API_SERVER;

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
    // console.log("token is",JSON.parse(localStorage.getItem('profile')));
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;}
    return req;
});

export const fetchPosts = ()=>API.get('/posts'); 
export const createPost = (newPost)=>API.post('/posts',newPost);
export const updatePost = (id,updatedPost)=>API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id)=>API.delete(`/posts/${id}`);
export const likePost = (id)=>API.patch(`/posts/${id}/likePost`);
export const getPostsBySearch = (searchQuery)=>API.get(`/posts/search?searchQuery=${searchQuery.searchTerm||'none'}&tags=${searchQuery.tags}`)


export const signin = (formData)=>API.post('/user/signin',formData);
export const signup = (formData)=>API.post('/user/signup',formData);