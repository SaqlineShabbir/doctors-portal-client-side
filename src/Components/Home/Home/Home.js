import React from 'react';
import Header from '../../Shared/Header/Header';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import BannerContactInfo from '../BannerContactInfo/BannerContactInfo';
import ContactUs from '../ContactUs/ContactUs';
import Exceptional from '../Exceptional/Exceptional';
import Services from '../Services/Services';
import Reviews from '../Testimonial/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <BannerContactInfo></BannerContactInfo>
            <Services></Services>
            <Exceptional></Exceptional>
            
            <AppointmentBanner></AppointmentBanner>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;