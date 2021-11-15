import React from 'react';
import './AddReview.css'
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth';
const AddReview = () => {
    const {user} = useAuth()
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
             alert('Successfully Added')
             reset()
         }
        })
        
     } 
       
    

    return (
        <div className="AddReview">
        <h4 className="mt-5 text-center">You Can Add A Review Here</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
  <input defaultValue={user.displayName} {...register("name", { required: true })} placeholder="user Name"/>
  <textarea {...register("description")} placeholder="Review Message" required/>
  <input {...register("number", { min: 0, max: 5 })} required placeholder="Review rating out of 5"/>
  
  <input type="submit" />
</form>
 </div>
    );
};

export default AddReview;