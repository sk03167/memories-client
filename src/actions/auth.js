import * as api from '../api/index.js';
import {AUTH, LOGOUT, SIGNIN, SIGNUP} from '../constants/actionTypes.js'

export const authAct =(user, navigate)=> async (dispatch)=>{
    try {
        const action = {type:AUTH, payload:{user,navigate}};
        // console.log("auth act load",user);
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
        // console.log("CAlling signin act")
        const {data} = await api.signin(formData)
        // console.log("signin return", data);
        const user = data
        const action = {type:AUTH, payload: {user,navigate}}
        // console.log("singin act load",user);
        dispatch(action);
    } catch (error) {
        console.log(error)
    }
}

export const signupAct = (formData, navigate)=>async(dispatch)=>{
    try {
        const {data} = await api.signup(formData)
        const user = data
        const action = {type:AUTH, payload: {user,navigate}}
        
        dispatch(action);
    } catch (error) {
        console.log(error)
    }
}