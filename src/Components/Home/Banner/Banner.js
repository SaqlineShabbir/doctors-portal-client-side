import React from 'react';
import chair from '../../../images/chair.png';
import Header from '../../Shared/Header/Header';
import './Banner.css'


const Banner = () => {
    return (
      <div className="bannerAndHeader">
        <Header></Header>
       <div className="banner-container">
     <div className="banner-text">
      <h2 className="fw-bolder">Your New Smile <br/>
      Starts Here  </h2>
      <p className="my-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde, mollitia officiis tenetur autem beatae sapiente animi necessitatibus quae corporis!
      </p>
      <button className="banner-btn">Get Appointment</button>
     </div>

   <div className="banner-img">
    <img src={chair} alt="" />
   </div>

       </div>
       </div>
    );
};

export default Banner;

