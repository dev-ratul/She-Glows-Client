import React from 'react';
import Hero from '../Hero/Hero';
import BestSaller from '../BestSaller/BestSaller';
import ShopbyCategory from '../ShopbyCategory/ShopbyCategory';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <BestSaller></BestSaller>
            <ShopbyCategory></ShopbyCategory>
        </div>
    );
};

export default Home;