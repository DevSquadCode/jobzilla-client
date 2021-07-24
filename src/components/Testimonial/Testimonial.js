// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import ReviewCard from './ReviewCard/ReviewCard';
// import testimonialData from './testimonialData.json'
// import styles from './Testimonial.module.css'
// const timeStamp = 4000;


// const Testimonial = () => {
//     return (
//         <div className={styles.testimonialContainer}>
//             <h1>Testimonial</h1>

//             <Carousel fade={false} controls={false} indicators={false} pause={false}>

//                 {
//                     testimonialData.map(data =>
//                         <Carousel.Item interval={timeStamp}>
//                             <div className="d-flex justify-content-evenly">
//                                 <ReviewCard data={data}></ReviewCard>
//                                 <ReviewCard data={data}></ReviewCard>
//                                 <ReviewCard data={data}></ReviewCard>
//                             </div>
//                         </Carousel.Item>)
//                 }

//             </Carousel>


//         </div>
//     );
// };

// export default Testimonial;

// -----------------------------------------------------

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Testimonial.module.css'
import testimonialData from './testimonialData.json'
import ReviewCard from "./ReviewCard/ReviewCard";

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 500,
            cssEase: "linear",
            centerMode: true,
            responsive: [
                {
                    breakpoint: 678,
                    settings: {
                        dots: true,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        speed: 5000,
                        autoplaySpeed: 500,
                        cssEase: "linear",
                        centerMode: true,
                    }

                }
            ]
        };
        return (
            <div className={styles.testimonialContainer}>
                <h2 className='text-center m-4'>Testimonial</h2>
                <Slider {...settings}>
                    {
                        testimonialData.map(data => <ReviewCard data={data} ></ReviewCard>)
                    }
                </Slider>
            </div>
        );
    }
}