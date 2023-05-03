import React, {useState, useEffect} from "react";
import useStyles from "./styles.js"
import FileBase from "react-file-base64"
import { TextField,Button, Typography, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePostAct } from "../../actions/posts.js";

const Form = ({currentId, setCurrentId})=>{

    const classes = useStyles();

    const post = useSelector((state)=>currentId?state.posts.find((p)=>p._id===currentId):null);

    const dispatch = useDispatch();

    const [postData, setPostData] = useState({
        creator:"",title:"",message:"",tags:"",selectedFile:""
    });

    useEffect(()=>{
        if(post)setPostData(post);
    },[post])

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(currentId){
            // console.log("dispatching update request");
            dispatch(updatePostAct(currentId, postData));
        }
        else{
            dispatch(createPost(postData));
        };
        clear();
    }
    // const printbase = (x)=>console.log(x);
    const clear = ()=>{
        setCurrentId(null);
        setPostData({
            creator:"",title:"",message:"",tags:"",selectedFile:""
        })
    }
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId?"Editing":"Creating"} a Memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData, creator:e.target.value})}></TextField>
                <TextField name="tile" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData, title:e.target.value})}></TextField>
                <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={(e)=>setPostData({...postData, message:e.target.value})}></TextField>
                <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData, tags:e.target.value.split(",")})}></TextField>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple = {false} onDone = {(base64)=>{
                        // printbase(base64.base64);
                        setPostData({...postData,selectedFile:base64.base64})
                        }}/>
                </div>
                <Button className = {classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    )
}

export default Form;