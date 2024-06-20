import * as api from '../api/index.js';
import {CREATE, UPDATE, FETCH_ALL, DELETE, LIKE} from '../constants/actionTypes.js'

//Action creators
export async function getPostsAct(dispatch){
    try {
        const {data} = await api.fetchPosts();
        // console.log(data);
        const action = {type: FETCH_ALL, payload: data}
        // console.log("Calling action",action);
        dispatch(action);
    } catch (error) {
        console.log(error.message);
    }
} 

export const getPostsBySearchAct=(searchQuery)=> async (dispatch)=>{
    try {
        const {data:{data}} = await api.getPostsBySearch(searchQuery);
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post)=>async(dispatch)=>{
    try {
        const {data} = await api.createPost(post);
        // console.log("resonse after create is",data);
        const action = {type: CREATE, payload: data}
        // console.log("Calling action",action);
        dispatch(action);
    } catch (error) {
        console.log(error.message);
    }
} 

export const updatePostAct = (id, post)=>async(dispatch)=>{
    try {
        const {data} = await api.updatePost(id, post);
        // console.log("resonse after update is",data);
        const action = {type: UPDATE, payload: data}
        // console.log("Calling action",action);
        dispatch(action);
    } catch (error) {
        console.log(error.message);
    }
} 

export const deletePostAct = (id)=>async(dispatch)=>{
    try {
        const {data} = await api.deletePost(id);
        // console.log("resonse after delete is",data);
        const action = {type: DELETE, payload: id}
        // console.log("Calling action",action);
        dispatch(action);
    } catch (error) {
        console.log(error.message);
    }
} 

export const likePostAct = (id)=>async(dispatch)=>{
    try {
        const {data} = await api.likePost(id);
        // console.log("resonse after like is",data);
        const action = {type: LIKE, payload: data}
        // console.log("Calling action",action);
        dispatch(action);
    } catch (error) {
        console.log(error.message);
    }
} 