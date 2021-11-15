import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import loginImg from '../../images/login.png'
import useAuth from '../../hooks/useAuth'
const Register = () => {
  const {isLoading, registerUser,user,authError} =useAuth()
    const [loginData, setLoginData] =useState({})
   const history = useHistory()

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        
         }


    const handleLogin = (e) => {
      e.preventDefault();
        if(loginData.password !== loginData.password2){
            alert('upps! Password did not matched')
            return
        }
        registerUser(loginData.email, loginData.password,loginData.name, history)
      
    }

    return (
        <Container>
             <Grid container spacing={2}>
                 <Grid sx={{mt:5}} item xs={12} md={6}>
                      <Typography variant = "body1" gutterBottom>
                            Register
                      </Typography> 
                     { !isLoading &&
                        <form onSubmit={ handleLogin}>
                        <TextField 
                        sx={{width:'75%', m:1}}
                       id="standard-basic"
                        label="YourName"
                        color="warning"
                         variant="standard" 
                         type="text"
                         name="name"
                         onBlur={handleOnBlur}
                         /> <br/>
                        <TextField 
                        sx={{width:'75%', m:1}}
                       id="standard-basic"
                        label="Email"
                        color="warning"
                         variant="standard" 
                         type="email"
                         name="email"
                         onBlur={handleOnBlur}
                         /> <br/>
                       <TextField 
                        sx={{width:'75%', m:1}}
                       id="standard-basic"
                        label="Password"
                        color="warning"
                         variant="standard" 
                         type="password"
                         name="password"
                         onBlur={handleOnBlur}
                         />
                       <TextField 
                        sx={{width:'75%', m:1}}
                       id="standard-basic"
                        label="Re-type Password"
                        color="warning"
                         variant="standard" 
                         type="password"
                         name="password2"
                         onBlur={handleOnBlur}
                         />
                          <br/>
                    <Button sx={{width:'75%', m:1}} type="submit" variant="contained">Register</Button> 
                         <br/>Already Registered? <Link to="/login">
                            <Button variant="text">Login</Button>
                          </Link>
                          </form>  
                     }
                     {
                       isLoading && <CircularProgress />
                     }
                     {user?.email && <Alert severity="success">User created Successfully — check it out!</Alert>}

                     {authError && <Alert severity="error">{authError}</Alert>}
                 </Grid>

                 <Grid item xs={12} md={6}>
                       <img src={loginImg} alt="" />
                 </Grid>
             </Grid>
         </Container>
    );
};

export default Register;