import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='lg:w-5/6 lg:mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;