import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { Avatar,Button, Paper, Grid, Typography, Container, TextField, Icon, FormControl } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { DockRounded, LockOutlined } from "@mui/icons-material/";
// import {GoogleLogin} from "react-google-login"
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import Input from "./Input.js";
import useStyles from "./styles.js"
import { classes } from "./styles.js";
import icon from "./icon.js";
import jwt_decode from "jwt-decode";
import { authAct, signinAct, signupAct } from "../../actions/auth.js";
import {useNavigate} from "react-router-dom";

const formSchema = {firstName:"", lastName:"",email:"",password:"",confirmPassword:""}


export default function Auth(){
    // const theme = useTheme();
    // const classes = suseStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(formSchema);

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(isSignup){
            dispatch(signupAct(formData,navigate) )
        }else{
            dispatch(signinAct(formData,navigate) )
        }

        console.log(formData);
    };
    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    };

    const handleShowPassword = ()=>{
        setShowPassword((prevShowPassword)=>!prevShowPassword);
    }

    const switchMode = ()=>{
        setIsSignup((prevIsSignup)=>!prevIsSignup)
        setShowPassword(false);
    };
    const  googleSuccess= async (res)=>{
        const decoded = jwt_decode(res.credential);
        // const userData = {...decoded}
        dispatch(authAct(decoded, navigate));
        // console.log(res);
    }
    const googleFailure=(res)=>{
        console.log("Google Login Unsuccessful", res)
    }
    const [showPassword, setShowPassword] = useState(false);
    return(
        <Container component="main" maxWidth="xs">
            <Paper sx={classes.paper} elevation={3}>
                <Avatar sx={classes.avatar}>
                    <LockOutlined/>
                </Avatar>
                <Typography variant="h5">{isSignup?'Sign Up':'Sign In'}</Typography>
                <form style={classes.form} onSubmit={handleSubmit}>
                    <Grid container justifyContent="center" spacing = {1}>
                        {
                            isSignup&&(
                               <>
                                <Input name="firstName" label = "First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label = "Last Name" handleChange={handleChange} half />
                               </>
                            )
                        }
                        <Input name = "email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name = "password" label="Password" handleChange={handleChange} type={showPassword?"text":"password"} handleShowPassword = {handleShowPassword} />
                        {isSignup&&<Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type = "password" />}
                        <Grid item xs = {12}>
                        <Button type="SUbmit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            {isSignup?"Sign Up":"Sign In"}
                        </Button>
                        </Grid> 
                        <Grid item >
                        <GoogleLogin 
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        type="standard"
                        theme="outline"
                        />
                        </Grid>
                       
                        {/* <GoogleLogin
                        clientId="863191747103-vbu6ppg27at856h9pio50gs1ef3p67ph.apps.googleusercontent.com"
                        render={(rendrProps)=>
                            (<Button className={classes.googleButton} color="primary" fullWidth onClick={rendrProps.onClick} disabled={rendrProps.disabled} startIcon = {<icon/>} variant="contained">Google Sign In</Button>)}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                        /> */}
                        <Grid container justifyContent = "flex-end">
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignup?"Sign In":"Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}