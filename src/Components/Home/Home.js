import React, { useState, useEffect} from "react";
import {Container, Grow, Grid, Paper, AppBar, TextField, Button} from '@mui/material';
import { MuiChipsInput } from 'mui-chips-input'
import { useDispatch } from "react-redux";
import { getPostsAct, getPostsBySearchAct } from "../../actions/posts";
import { useTheme } from '@mui/material/styles';
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
// import useStyles from './styles.js'
import Paginate from "../Pagination/Pagination";
import { useLocation, useNavigate } from "react-router-dom";
import { classes } from "./styles.js";

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

export default function Home(){
    const [currentId, setCurrentId] = useState(null);
    const [searchTerm, setSearchTerm] = useState(null);
    const [tags, setTags] = useState([]);
    // const theme = useTheme();
    // const classes = useStyles(theme);
    const dispatch = useDispatch();
    const query = useQuery();
    const navigate = useNavigate();
    const page = query.get('page');
    const searchQuery = query.get('searchQuery');
    const handleKeyPress = (e)=>{
        if(e.keyCode === 13){
            console.log("searchkey pressed");
            searchPost();
        }
    }
    const handleAdd = (tag)=>{
        // console.log('adding tag to tag search')
        setTags([...tags,tag])
    }
    const handleDelete = (tag)=>{
        setTags(tags.filter((t)=>(t!==tag)));
    }
    const searchPost = ()=>{
        
        if(searchTerm?.trim() || tags){
            console.log(searchTerm);
            dispatch(getPostsBySearchAct({searchTerm,tags:tags.join(',')}))
        }
        else{
            navigate('/')
        }
    };
    useEffect(()=>{
        dispatch(getPostsAct);
    },[dispatch]);
    return(
       
        <Grow in>
                <Container maxWidth='xl'>
                    <Grid sx = {classes.gridContainer} container justify="space-between" alignItems="start" spacing={3}>
                        <Grid item xs={12} sm={6} md = {9} > 
                            <Posts setCurrentId = {setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={6} md = {3} > 
                            <AppBar sx={classes.appBarSearch} position="static" color="inherit">
                                <TextField name="search" variant="outlined" label="searchMemories"
                                onKeyUp={handleKeyPress}
                                fullWidth value = {searchTerm} onChange={(e)=>{
                                    setSearchTerm(e.target.value);
                                }}/>
                                <MuiChipsInput sx = {{Margin: '10px 0'}}
                                value = {tags}
                                onAddChip = {handleAdd}
                                onDeleteChip = {handleDelete}
                                label="Search tags"
                                variant="outlined"
                                />
                                <Button onClick={searchPost} className={classes.searchButton} color="primary" variant="contained">Search</Button>
                            </AppBar>
                            <Form currentId = {currentId} setCurrentId = {setCurrentId} />
                            <Paper elevation={6}>
                                <Paginate/>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
    );
}