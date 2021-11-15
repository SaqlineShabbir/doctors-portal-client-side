
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Header from '../src/Components/Shared/Header/Header';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Footer from './Components/Shared/Footer/Footer';
function App() {

  return (
    <div>
     <AuthProvider>

     <Router>
      
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route  path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute  path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route  path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute exact path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </Router>

     </AuthProvider>
    </div>
  );
}

export default App;
