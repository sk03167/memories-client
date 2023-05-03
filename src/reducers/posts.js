import {CREATE, UPDATE, FETCH_ALL, DELETE, LIKE} from '../constants/actionTypes.js'


export function posts (posts = [], action){
    // console.log(action.type);
    switch(action.type){
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts,action.payload];
        case UPDATE:
            return posts.map((post)=>post._id ===action.payload._id? action.payload: post);
        case DELETE:
            return posts.filter((post)=>post._id!==action.payload);
        case LIKE:
            return posts.map((post)=>post._id ===action.payload._id? action.payload: post);
        default:{
            // console.log("Defaul reducer return")
            return posts; }
    }
}