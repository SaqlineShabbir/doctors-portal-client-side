import { Alert, Button, CircularProgress, Container, FormControl, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import loginImg from '../../images/login.png'
const Login = () => {
   const [loginData, setLoginData] = useState({})
   const {loginUser, isLoading,user,authError,signInWithGoogle} = useAuth()
    
    const location = useLocation()
    const navigate = useNavigate()
    const handleOnchange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
         }

    const handleLogin = (e) => {
      loginUser(loginData.email, loginData.password, location, navigate)
      e.preventDefault();
    }

    const handleGoogleSignIn = () => {
      signInWithGoogle(location,navigate)
    }

    return (
         <Container>
             <Grid container spacing={2}>
                 <Grid sx={{mt:5}} item xs={12} md={6}>
                      <Typography variant = "body1" gutterBottom>
                            Login
                      </Typography> 
                      <form onSubmit={handleLogin}>
                      <TextField 
                      sx={{width:'75%', m:1}}
                     id="standard-basic"
                      label="Email"
                      color="warning"
                       variant="standard" 
                       type="email"
                       name="email"
                       onBlur={handleOnchange}
                       /> <br/>
                     <TextField 
                      sx={{width:'75%', m:1}}
                     id="standard-basic"
                      label="Password"
                      color="warning"
                       variant="standard" 
                       type="password"
                       name="password"
                       onBlur={handleOnchange}
                       />
                        <br/>
                        <Button  sx={{width:'75%', m:1}} variant="contained" type="submit">Log In</Button>
                       <br/>New TO Doctors Portal? <Link to="/register">
                          <Button variant="text">SignUp</Button>
                        </Link>
                        </form>  
                        {
                       isLoading && <CircularProgress />
                     }
                     {user?.email && <Alert severity="success">Logged in successfully— check it out!</Alert>}

                     {authError && <Alert severity="error">{authError}</Alert>}
                      
                      <Button onClick={handleGoogleSignIn} variant='contained'>Sign In With Google</Button>
                 </Grid>

                 <Grid item xs={12} md={6}>
                       <img src={loginImg} alt="" />
                 </Grid>
             </Grid>
         </Container>
    )
};

export default Login;