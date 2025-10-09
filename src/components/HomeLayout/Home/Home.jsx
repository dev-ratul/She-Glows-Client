import React from 'react';
import Hero from '../Hero/Hero';
import BestSaller from '../BestSaller/BestSaller';
import ShopbyCategory from '../ShopbyCategory/ShopbyCategory';
import NewArrive from '../NewArrive/NewArrive';
import OurSkincarePhilosophy from '../OurSkincarePhilosophy/OurSkincarePhilosophy';
import HappyUser from '../HappyUser/HappyUser';
import JoinOurCommunity from '../JoinOurCommunity/JoinOurCommunity';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <BestSaller></BestSaller>
            <ShopbyCategory></ShopbyCategory>
            <NewArrive></NewArrive>
            <OurSkincarePhilosophy></OurSkincarePhilosophy>
            <HappyUser></HappyUser>
            <JoinOurCommunity></JoinOurCommunity>
        </div>
    );
};

export default Home;