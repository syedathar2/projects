//import React from 'react';
import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://api.themoviedb.org/3',
});

//api we would be sending our request
//instance.get('/foo-bar');
//'https://api.themoviedb.org/3/foo-bar'
export default instance;