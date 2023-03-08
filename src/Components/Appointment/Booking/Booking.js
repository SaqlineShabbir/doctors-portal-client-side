import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking,date, setBookingSuccess}) => {
    const {name,time,space,price} = booking;

    const [openModal, setModalOpen] = React.useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
    return (
       <>

<Grid item xs={12} sm={6} md={4}>

<Paper elevation={3} sx={{ py:5 }}>
    <Box sx={{px:5 }}>

    <Typography variant="h5" component="div">
        {name}
    </Typography>
    <Typography variant="h6">
        {time}
    </Typography>
    <Typography variant="h6">
        $ {price}
    </Typography>
    <Typography variant="caption">
        {space} Spaces Available
    </Typography><br/>
    <Button onClick={handleModalOpen}variant="contained">Book Appointment</Button>

    </Box>
</Paper>
</Grid>
<BookingModal
date={date}
 handleModalClose={handleModalClose} 
 openModal={openModal}
 booking={booking}
 setBookingSuccess={setBookingSuccess}
 >

 </BookingModal>

       </>
    );
};

export default Booking;