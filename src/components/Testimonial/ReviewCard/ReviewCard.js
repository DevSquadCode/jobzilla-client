import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import styles from './ReviewCard.module.css'

const ReviewCard = (props) => {
    const { reviewCard, reviewText } = styles;
    const { name, post, company, image, feedback } = props.data;
    return (
        <div className={reviewCard}>
            <p className={reviewText}><FaQuoteLeft />{feedback}</p>

            <div className="row">
                <div className="col-md-5">
                    <img className='rounded-circle ml-3 mb-3 w-75' src={image} alt="" />
                </div>
                <div className="col-md-7">
                    <h4>{name}</h4>
                    <p>{post} <br /> {company} </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;