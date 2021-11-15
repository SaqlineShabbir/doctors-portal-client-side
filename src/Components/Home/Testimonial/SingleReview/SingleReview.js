import React from 'react';
import Rating from 'react-rating';
import './SingleReview.css'
const SingleReview = (props) => {
    const {name,description,number,_id} = props.review;
    return (

        <div>
            <div className="single-review-container shadow-lg">
                <div className="single-review-content">
                  <div>
                  <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png" alt="" />
                <h4 className="name mx-5">{name}</h4>
                
                  <Rating className="rating"
                   initialRating={number}
                  emptySymbol="far fa-star my-color "
               fullSymbol="fas fa-star my-color"
                readonly/>
                <p className="ms-4">{description}</p>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;