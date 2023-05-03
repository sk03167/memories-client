import React, { useState, useEffect} from "react";
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import { useDispatch } from "react-redux";
import { getPostsAct } from "./actions/posts";



import memories from './images/memories.png';
import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Form";
import useStyles from "./styles.js"

export default function App(){
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getPostsAct);
    },[dispatch]);

    // console.log(classes);

    return(
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt = "memories" height="60"></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="start" spacing={3}>
                        <Grid item xs={12} sm={7} > 
                        <Posts setCurrentId = {setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4} > 
                        <Form currentId = {currentId} setCurrentId = {setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}