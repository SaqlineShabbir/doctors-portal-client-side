import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import fluoride from '../../../images/fluoride.png'
import whitening from '../../../images/whitening.png'
import cavity from '../../../images/cavity.png'
import Service from '../Service/Service';
import './Services.css'


const Services = () => {

    const services = [
        {
            name:"Fluoride Treatment",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusantium temporibus esse velit odio quod corrupti inventore, hic explicabo impedit placeat amet illum ea eveniet officiis magni dignissimos nemo facilis!",
           img:fluoride
        },
        {
            name:"Cavity Filling",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusantium temporibus esse velit odio quod corrupti inventore, hic explicabo impedit placeat amet illum ea eveniet officiis magni dignissimos nemo facilis!",
            img:cavity
        },
        {
            name:"Teeth Whitening",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusantium temporibus esse velit odio quod corrupti inventore, hic explicabo impedit placeat amet illum ea eveniet officiis magni dignissimos nemo facilis!",
            img:whitening
        }
    ]
    return (
        <div className="services-main">
     <h2 className="text-center mb-5">Our Services</h2>
         <div className="services-container">

       {
        services.map(service => <Service key={service.id} service={service}></Service>)
      }

</div>
        </div>
    );
};

export default Services;