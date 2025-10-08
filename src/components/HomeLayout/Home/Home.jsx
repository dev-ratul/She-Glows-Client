import React from 'react';
import Hero from '../Hero/Hero';
import BestSaller from '../BestSaller/BestSaller';
import ShopbyCategory from '../ShopbyCategory/ShopbyCategory';
import NewArrive from '../NewArrive/NewArrive';
import OurSkincarePhilosophy from '../OurSkincarePhilosophy/OurSkincarePhilosophy';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <BestSaller></BestSaller>
            <ShopbyCategory></ShopbyCategory>
            <NewArrive></NewArrive>
            <OurSkincarePhilosophy></OurSkincarePhilosophy>
        </div>
    );
};

export default Home;