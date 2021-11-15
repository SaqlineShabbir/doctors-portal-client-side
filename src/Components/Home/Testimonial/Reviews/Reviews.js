import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';
import './Review.css'
const Reviews = () => {
    const [reviews, setReviews] =useState()
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data =>{ 
            console.log(data)
            setReviews(data)})
    },[])
    return (
       
        <div className="reviews-main">
        <div>
        <h3 className=" mt-5 ms-5 ">What Our Clients Says <span className="my-color">(Reviews)</span></h3>
      
        </div>
     <div className="reviews-container">
 
     {
     reviews?.map(review => <SingleReview key={review._id} review={review}></SingleReview>)
     }
</div>

</div>
    );
};

export default Reviews;