import React, { useEffect } from "react";
// import useStyles from "./styles.js"
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import {ThumbUpAlt, ThumbUpAltOutlined} from '@mui/icons-material';
// import DeleteIcon from '@mui/material-icons/Delete';
import {MoreHoriz} from '@mui/icons-material';
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import { deletePostAct, likePostAct } from "../../../actions/posts.js";

import {classes} from "./styles.js"

const Post = ({post, setCurrentId})=>{
    // const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const sel = useSelector((state)=>state?.authReducer.authData);
    useEffect(()=>{

    },[sel])

    const Likes = () => {
        if (post.likes.length > 0) {
          return post.likes.find((like) => like === (user?.result?.sub || user?.result?._id))
            ? (
              <><ThumbUpAlt fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
            ) : (
              <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }
    
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
      };

    return(  
       <Card sx={classes.card}>
            <CardMedia sx={classes.media} image= {post.selectedFile} title = {post.title}/>
            
            <div style={classes.overlay}>
                 <Typography variant="h6">{post.name||post.creator  }</Typography>
                 <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
           
            {(user?.result?.sub===post.creator || user?.result?._id===post.creator)&&(
            <div style={classes.overlay2}>
                <Button sx={{color:'white'}} size="small" onClick={()=>{
                    setCurrentId(post._id)
                }}>
                    <MoreHoriz fontSize = "default"/>
                </Button>
            </div>
             )}
            <div style={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag)=>tag[0]==='#'?`${tag} `:`#${tag} `)}</Typography>
                {/* {post.tags.map((tag)=>tag[0]==='#'?`${tag} `:`#${tag} `)} */}
            </div>
            <Typography sx={classes.title} variant = "h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography  variant = "body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" disabled = {!user?.result   } color = "primary" onClick={()=>{dispatch(likePostAct(post._id))}}>
                    <Likes/>
                </Button>
                {(user?.result?.sub===post.creator || user?.result?._id===post.creator)&&(
                    <Button size="small" color = "primary" onClick={()=>{dispatch(deletePostAct(post._id))}}>
                    {/* <ThumbUpAlt fontSize = "small"/> */}
                    Delete
                </Button>
                )}
            </CardActions>
       </Card>
    )
}

export default Post;