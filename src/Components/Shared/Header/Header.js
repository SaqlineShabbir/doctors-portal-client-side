import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user,logOut,} = useAuth();
    return (
      <Navbar style={{ height:"100px"}} expand="lg">
      <Container >
        <Navbar.Brand className=" fw-bold" href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link as={Link} className=" fw-bold" to="/home">Home</Nav.Link>
           {!user.email && <Nav.Link as={Link} className=" fw-bold mx-3" to="/login">Log In</Nav.Link>}
            <Nav.Link as={Link} className=" fw-bold mx-3" to="/appointment">Appointment</Nav.Link>
            <Nav.Link as={Link} className=" fw-bold" to="/dashboard">Dash Board</Nav.Link>
           
            { 
              user.email?
              <Link to="/register">   <button onClick={logOut} className="signup-button ">Log Out</button></Link>
              :
            <Link to="/register">   <button className="signup-button ">Sign Up</button></Link>
           }
           { user.email &&
               <div className="d-flex user">
               <img className="bg-white" src={user?.photoURL} alt="" />
               <p className="mt-1 ms-2 ">{user?.displayName}</p>
               </div>
           }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

{/* <Box sx={{ flexGrow: 1 }}>
<AppBar position="static">
  <Toolbar>
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      Doctors Portal
    </Typography>
 {
user?.email ?
   <Box>
<Button onClick={logOut} color="inherit">Log Out</Button>
<NavLink style={{color: 'white',textDecoration: 'none'}} to="/dashboard"><Button color="inherit">Dash Board</Button></NavLink>
</Box>

  :
  <NavLink style={{color: 'white', textDecoration: 'none'}} to="/login"><Button color="inherit">Login</Button></NavLink>
 }
 
    <NavLink style={{color: 'white',textDecoration: 'none'}} to="/appointment"><Button color="inherit">Appointment</Button></NavLink>

    
    <p>{user?.displayName}</p>
    img
  </Toolbar>
</AppBar>
</Box> */}