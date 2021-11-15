import React from 'react';
import './Exceptional.css'
import img from '../../../images/treatment.png'
const Exceptional = () => {
    return (
        <div className="exceptional-container">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="exceptional-texts">
                <h2>Exceptional Dental Care On Your Terms </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illo soluta harum blanditiis vel a veritatis cum nemo sit repellat iure labore, officiis quia delectus ipsa tempore reprehenderit nesciunt laborum earum eveniet itaque? Aliquam, exercitationem ut. Qui molestiae, ullam inventore error voluptatem maxime odit, unde voluptas, atque nemo molestias labore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ducimus quibusdam veniam a, aliquam ipsum quos nobis commodi optio aut.</p>
                <button className="banner-btn">Learn More</button>
            </div>
        </div>
    );
};

export default Exceptional;