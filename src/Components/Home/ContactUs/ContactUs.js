import React from 'react';
import { useForm } from "react-hook-form";
import './ContactUs.css'
const ContactUs = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
          <>
          
        <div className="contact-container">
            <h2 className="text-center text-white mt-5">Contact with Us</h2>
           <div className="contact-content">
           <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Email Address"{...register("email",)} /><br/>
      <input placeholder="Subject" type="text" {...register("subject")} /><br/>
      <textarea placeholder="Message" type="text" {...register("message")} /><br/>

      <input className="banner-btn" type="submit" />
    </form>
           </div>
        </div>
        </>
    );
};

export default ContactUs;