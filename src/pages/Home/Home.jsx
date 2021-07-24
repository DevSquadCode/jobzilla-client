import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Header/Banner';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';



const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Categories />
            <Footer />
        </>
    );
};

export default Home;