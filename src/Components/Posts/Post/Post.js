import React from "react";
// import useStyles from "./styles.js"
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import {ThumbUpAlt} from '@mui/icons-material';
// import DeleteIcon from '@mui/material-icons/Delete';
import {MoreHoriz} from '@mui/icons-material';
import moment from 'moment';
import { useDispatch } from "react-redux";
import { deletePostAct, likePostAct } from "../../../actions/posts.js";

import {classes} from "./styles.js"

const Post = ({post, setCurrentId})=>{
    // const classes = useStyles();
    const dispatch = useDispatch();

    return(  
       <Card sx={classes.card}>
            <CardMedia sx={classes.media} image= {post.selectedFile} title = {post.title}/>
            <div style={classes.overlay}>
                 <Typography variant="h6">{post.creator}</Typography>
                 <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div style={classes.overlay2}>
                <Button sx={{color:'white'}} size="small" onClick={()=>{
                    setCurrentId(post._id)
                }}>
                    <MoreHoriz fontSize = "default"/>
                </Button>
            </div>
            <div style={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag)=>tag[0]==='#'?`${tag} `:`#${tag} `)}</Typography>
                {/* {post.tags.map((tag)=>tag[0]==='#'?`${tag} `:`#${tag} `)} */}
            </div>
            <Typography sx={classes.title} variant = "h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography  variant = "body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color = "primary" onClick={()=>{dispatch(likePostAct(post._id))}}>
                    <ThumbUpAlt fontSize = "small"/>
                    Like
                    {post.likeCount}
                </Button>
                <Button size="small" color = "primary" onClick={()=>{dispatch(deletePostAct(post._id))}}>
                    <ThumbUpAlt fontSize = "small"/>
                    Delete
                </Button>
            </CardActions>
       </Card>
    )
}

export default Post;