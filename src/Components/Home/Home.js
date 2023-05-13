import React, { useState, useEffect} from "react";
import {Container, Grow, Grid} from '@mui/material';
import { useDispatch } from "react-redux";
import { getPostsAct } from "../../actions/posts";
import { useTheme } from '@mui/material/styles';
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from './styles.js'

export default function Home(){
    const [currentId, setCurrentId] = useState(null);
    const theme = useTheme();
    const classes = useStyles(theme);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getPostsAct);
    },[dispatch]);

    return(
        <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="start" spacing={3}>
                        <Grid item xs={12} sm={7} > 
                        <Posts setCurrentId = {setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4} > 
                        <Form currentId = {currentId} setCurrentId = {setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
    );
}