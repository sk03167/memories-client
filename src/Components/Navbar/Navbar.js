import React from 'react';
import  {AppBar, Avatar, Toolbar, Typography, Button, Paper} from '@mui/material';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';


import memories from "../../images/memories.png"
import { logoutAct } from '../../actions/auth';
import { useDispatch } from 'react-redux';

// import { useTheme } from '@mui/material/styles';
// import useStyles from "./styles.js"
import { classes } from './styles';
import { useEffect, useState } from 'react';

export default function Navbar(){
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile'))?.result);
   
    //did this to change the state of page on auth change. but could also be done based on useLocation hook of reac router dom. You can 
    //use the "location = useLocation()" and put this variable in the dependecy list of the useEffect.
    const sel = useSelector((state)=>state?.authReducer.authData);
    // console.log(sel)
    const dispatch = useDispatch();
    // console.log("authstate",sel);
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('profile'))?.result);
    },[sel])
    
    const handleLogout = ()=>{
        console.log("handlonglogoout")
        dispatch(logoutAct);
    }
    
    // const [sub,setSub] = useState(useSelector((state)=>state.authReducer.authData.sub));
    // console.log("user",user);
    // useEffect(()=>{
    //     setUser(JSON.parse(localStorage.getItem('profile')));
    // },[])

    // const theme = useTheme();

    // const classes = useStyles(theme);
    return(
    <AppBar sx={classes.appBar} position="static" color="inherit">
        <div style={classes.brandContainer}>
            <Typography component={Link} to="/" sx={classes.heading} variant="h2" align="center">Memories</Typography>
            <img style={classes.image} src={memories} alt = "memories" height="60"></img>
        </div>
        <Toolbar sx={classes.Toolbar}>
            {user?(
                <div style={classes.profile}>
                    <Avatar sx={classes.purple} alt={user.name} src={user.picture}>{user?.name?.charAt(0)}</Avatar>
                    <Paper elevation={2} variant='outlined' sx={{alignItems:"center"}}>
                    <Typography sx={classes.userName} variant = "h6">{user.name}</Typography>
                    </Paper>
                    <Button variant = "contained" sx={classes.logout} color = "secondary" onClick={handleLogout}>Logout</Button>
                </div>
            ):(
                <Button component = {Link} to="/auth" variant="contained" color = "primary">Sign In</Button>
            )}
        </Toolbar>
    </AppBar>)
}