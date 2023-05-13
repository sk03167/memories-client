import React from "react";
import {Container}from '@mui/material';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth/Auth";


export default function App(){

    // console.log(classes);

    return(
        <BrowserRouter>
         <Container maxWidth='lg'>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/auth" element={<Auth/>}/>
                </Routes>
        </Container>
        </BrowserRouter> 
    )
}