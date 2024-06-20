import React, {useEffect} from "react";
import {Container}from '@mui/material';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import PostDetails from "./Components/PostDetails/PostDetails";
import { useSelector } from "react-redux";
import authReducer from "./reducers/auth";

export default function App(){

    // console.log(classes);
    const user = useSelector((state)=>authReducer.authData);
    console.log(user);

    return( 
        <BrowserRouter>
         <Container maxWidth='xl'>
         <Navbar/>
                <Routes>
                    <Route path="/" exact element = {<Navigate to="posts/"/>}/>
                    <Route path="/posts" exact element={<Home/>}/>
                    <Route path="/posts/search" exact element={<Home/>}/>
                    <Route path ="/posts/:id" element={<PostDetails/>}/>
                    {/* Need to implement rerouting in auth */}
                    <Route path="/auth" element={<Auth/>}/>
                </Routes>
        </Container>
        </BrowserRouter> 
    )
}