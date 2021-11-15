import { Button, Fade, InputAdornment, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import useAuth from '../../../hooks/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 470,
    backgroundColor: 'white',
    
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
  };
const BookingModal = ({openModal, handleModalClose,booking,date, setBookingSuccess}) => {
  const {name, time} =booking

const {user} = useAuth()

  
  const initialInfo = {patientName: user.displayName, email: user.email, phone: ''}
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = e =>{
     const field = e.target.name;
     const value = e.target.value;
     const newInfo = {...bookingInfo};
    
     newInfo[field] = value 
     setBookingInfo(newInfo)
  }


  const handleBookingSubmit = (e) => {
    alert('successfully booked')
    const appointment = {
      ...bookingInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString()
      
     
    }
    console.log(appointment)
   

    //collect data and send to the server
  fetch('https://agile-chamber-33885.herokuapp.com/appointments', {
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(appointment)
  })
  .then(res => res.json())
  .then(data =>{ 
      if(data.insertedId){
          setBookingSuccess(true)

        handleModalClose()
      }
    console.log(data)})


    
    e.preventDefault()
}
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <form >
           
              <TextField
              
              style={{ width:400}}
          
          defaultValue={user.displayName}
          name="patientName"
          onBlur={handleOnBlur}
          id="outlined-start-adornment"
         
          sx={{ m: 1, width: '25ch' }}
          
        />
              <TextField
              required
              style={{ width:400}}
          label="Your Email"
          defaultValue={user.email}
          name="email"
          onBlur={handleOnBlur}
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          
        />
              <TextField
              required
              style={{ width:400}}
          label="Your Phone Number"
          name="phone"
          onBlur={handleOnBlur}
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          
        />
              <TextField
              disabled
              style={{ width:400}}
         defaultValue={date.toDateString()}
          label="Date"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          
        />

         <TextField
         disabled
           style={{ width:400, color:'black'}}
          defaultValue={time}
          label="Time"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          
        />
        <Button onClick={handleBookingSubmit} style={{m:5}} variant="contained">Submit</Button>
              </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;