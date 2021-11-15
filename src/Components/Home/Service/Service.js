import { CardMedia, Grid } from '@mui/material';
import React from 'react';
import './Service.css'

const Service = (props) => {
    const {img,name,description} = props.service;
    return (
          <div className="service-container">
           <div className="service-textImg">
           <img src={img} alt="" />
            <h5 className="my-4">{name}</h5>
           </div>
            <p className="p-3">{description}</p>
          </div>
    );
};

export default Service;