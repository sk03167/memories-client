import React, {useState, useEffect} from "react";
// import useStyles from "./styles.js"
import { classes } from "./styles.js";
import FileBase from "react-file-base64"
import { TextField,Button, Typography, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePostAct } from "../../actions/posts.js";
import { Margin } from "@mui/icons-material";


const Form = ({currentId, setCurrentId})=>{

    // const classes = useStyles();

    const post = useSelector((state)=>currentId?state.posts.find((p)=>p._id===currentId):null);
    const user = JSON.parse(localStorage.getItem('profile'));
    const sel = useSelector((state)=>state?.authReducer.authData);
    const dispatch = useDispatch();

    const [postData, setPostData] = useState({
       stitle:"",message:"",tags:"",selectedFile:""
    });

 
    useEffect(()=>{
        if(post)setPostData(post);
        
    },[post, sel])

    if(!user?.result?.name){
        return(
            <Paper sx={classes.paper}>
                <Typography variant="h6" align = "center">
                    Please sign in or create an account
                </Typography>
            </Paper>
        )
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(currentId){
            // console.log("dispatching update request");
            dispatch(updatePostAct(currentId, {...postData,name:user?.result?.name}));
        }
        else{
            dispatch(createPost({...postData,name:user?.result?.name}));
        };
        clear();
    }
    // const printbase = (x)=>console.log(x);
    const clear = ()=>{
        setCurrentId(null);
        setPostData({
            title:"",message:"",tags:"",selectedFile:""
        })
    }
    return(
        <Paper sx={classes.paper}>
            <form autoComplete="off" noValidate style={{...classes.root,...classes.form}}
            // style={`${classes.root} ${classes.form}`} 
            onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId?"Editing":"Creating"} a Memory</Typography>
                {/* <TextField sx={{padding:1}} name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData, creator:e.target.value})}></TextField> */}
                <TextField sx={{padding:1}} name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData, title:e.target.value})}></TextField>
                <TextField sx={{padding:1}} name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e)=>setPostData({...postData, message:e.target.value})}></TextField>
                <TextField sx={{padding:1}} name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData, tags:e.target.value.split(",")})}></TextField>
                <div style={classes.fileInput}>
                    <FileBase type="file" multiple = {false} onDone = {(base64)=>{
                        // printbase(base64.base64);
                        setPostData({...postData,selectedFile:base64.base64})
                        }}/>
                </div>
                <Button sx = {classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    )
}

export default Form;