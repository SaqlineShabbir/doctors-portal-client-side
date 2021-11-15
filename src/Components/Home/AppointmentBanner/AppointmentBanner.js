import React from 'react';
import './AppointmentBanner.css'
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';
const AppointmentBanner = () => {

    const appointmentBg ={
        background: `url(${bg})`,
        backgroundColor:'rgba(45, 58, 74, 0.8)',
        backgroundBlendMode:'darken, luminosity',
        marginTop:150
    }
    return (
      <div className="appointment-banner-container"> 
      <div className="appointment-banner-img">
       <img src={doctor} alt="" />
      </div>
      <div className="appointment-banner-texts">
      <h2>Make An Appointment Today</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem inventore explicabo ipsam, doloremque ducimus iure nesciunt dolores asperiores accusantium reprehenderit natus, quaerat quasi quod qui eum? Voluptatem sit ipsum earum.</p>
      <button className="banner-btn">Learn Mora</button>
      </div>
      </div>
    );
};

export default AppointmentBanner;