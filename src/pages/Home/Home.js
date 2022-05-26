import React from 'react';
import Banner from '../Banner/Banner';
import BussinessSummary from '../BusinessSummary/BussinessSummary';
import Client from '../Client/Client';
import Expert from '../Expert/Expert';
import Products from '../Products/Products';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Products></Products>
            <BussinessSummary></BussinessSummary>
            <Expert></Expert>
            <Client></Client>
        </>
    );
};

export default Home;