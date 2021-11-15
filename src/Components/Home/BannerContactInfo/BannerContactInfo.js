import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './BannerContainerInfo.css'
const BannerContactInfo = () => {
    return (
       
      <>
      <div className="banner-contact-info-main ">
        <div className="banner-contact-info content-1">
            <h5><i class="fas fa-clock icon"></i> Opening Hours</h5>
        </div>
        <div className="banner-contact-info bg-dark">
            <h5><i class="fas fa-map-marker-alt icon"></i> Visit Our Location</h5>
        </div>
        <div className="banner-contact-info content-1">
             <h5><i className="fas fa-phone-alt icon"></i> Contact Us</h5>
             <p>0197955002</p>
        </div>
      </div>
      </>
      
    );
};

export default BannerContactInfo;







        