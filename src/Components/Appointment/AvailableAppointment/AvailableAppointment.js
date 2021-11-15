import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id:1,
        name:'Teeth Orthodontics',
        time:'8.00 AM - 9.00 AM',
        space:5
    },
    {
        id:2,
        name:'Cosmetic Dentistry',
        time:'10.30 AM - 11.00 AM',
        space:5
    },
    {
        id:3,
        name:'Teeth Cleaning',
        time:'5.00 PM - 6.00 PM',
        space:5
    },
    {
        id:4,
        name:'Cavity Protection',
        time:'11.00 AM - 12.00 PM',
        space:5
    },
    {
        id:5,
        name:'Pediatric Dental',
        time:'8.00 PM - 9.00 PM',
        space:5
    },
    {
        id:6,
        name:'Oral Surgery',
        time:'10.00 PM - 11.00 PM',
        space:5
    }
]



const AvailableAppointment = ({date}) => {
  const [bookingSuccess, setBookingSuccess] =useState(false)
    return (
        <Container>
            <Typography variant='h4' sx={{my:5, }}>AvailableAppointments {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment booked successfully— check it out!</Alert>}
         <Grid container spacing={2}>

 {
     bookings.map(booking=><Booking key={booking.id} booking={booking} date={date} setBookingSuccess={setBookingSuccess}></Booking>)
 }
          </Grid>
     </Container>
    );
};

export default AvailableAppointment;