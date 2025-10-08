import React from 'react';
import Hero from '../Hero/Hero';
import BestSaller from '../BestSaller/BestSaller';
import ShopbyCategory from '../ShopbyCategory/ShopbyCategory';
import NewArrive from '../NewArrive/NewArrive';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <BestSaller></BestSaller>
            <ShopbyCategory></ShopbyCategory>
            <NewArrive></NewArrive>
        </div>
    );
};

export default Home;