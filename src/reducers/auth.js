import {AUTH, LOGOUT} from '../constants/actionTypes.js'

export function authReducer (user = {}, action){
    // console.log(action.type);
    
    switch(action.type){
        case AUTH:
            // console.log("auth reducer call",action.payload)
            localStorage.setItem('profile',JSON.stringify({...action?.payload.user}))
            action.payload.navigate("/")
            // console.log("auth reducer call",action.payload)
            // console.log(user);
            return {...user, authData:action?.payload.user};
        case LOGOUT:
            localStorage.removeItem('profile');
            return {...user, authData:null};
        default:
            return user;
    }
}

export default authReducer;
