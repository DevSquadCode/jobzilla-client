import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Header/Banner';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';
import Jobpost from '../../components/Categories/Jobpost';
import Testimonial from '../../components/Testimonial/Testimonial';


const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Categories />
            <Jobpost />
            <Testimonial/>
            <Footer />
        </>
    );
};

export default Home;