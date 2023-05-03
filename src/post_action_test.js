import * as api from './api/index.js';

// Action creators
 const getPostsAct = ()=>async (dispatch)=>{
    // try {
      api.fetchPosts()
    
        // const action = {type: 'FETCH_ALL', payload: data}
        // console.log("Calling action",action);
        // dispatch(action);
    // } catch (error) {
    //     console.log(error.message);
    // }
}
getPostsAct(); 