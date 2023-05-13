import * as api from '../api/index.js';
import {AUTH, LOGOUT, SIGNIN, SIGNUP} from '../constants/actionTypes.js'

export const authAct =(user, navigate)=> async (dispatch)=>{
    try {
        const action = {type:AUTH, payload:{user,navigate}};
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}

export const logoutAct = (dispatch)=>{
    try {
        const action = {type:LOGOUT};
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}

export const signinAct = (formData, navigate)=>async(dispatch)=>{
    try {
        const action = {type:SIGNIN, payload: {formData}}
    } catch (error) {
        console.log(error)
    }
}

export const signupAct = (formData, navigate)=>async(dispatch)=>{
    try {
        const action = {type:SIGNUP, payload: {formData}}
    } catch (error) {
        console.log(error)
    }
}