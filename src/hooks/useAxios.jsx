import axios from 'axios';
import React from 'react';

const useAxios = () => {

    const axiosInstanse= axios.create({
        baseURL: 'http://localhost:3000/'
    })

    return axiosInstanse
};

export default useAxios;