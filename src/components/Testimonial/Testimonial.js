import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Testimonial.module.css'
// import testimonialData from './testimonialData.json'
import ReviewCard from "./ReviewCard/ReviewCard";



export default class AutoPlay extends Component {
    state = {
        testimonialData: []
    }

    componentDidMount() {
        fetch('https://aqueous-cove-89051.herokuapp.com/testimonials')
            .then((response) => response.json())
            .then(data => {
                this.setState({ testimonialData: data });
            });
    }

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
                        this.state.testimonialData.map(data => <ReviewCard data={data} ></ReviewCard>)
                    }
                </Slider>
            </div>
        );
    }
}