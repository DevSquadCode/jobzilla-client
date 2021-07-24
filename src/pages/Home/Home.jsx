import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Header/Banner';
import Footer from '../../components/Footer/Footer';
import Testimonial from '../../components/Testimonial/Testimonial';



const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Testimonial/>
            <Footer />
        </>
    );
};

export default Home;