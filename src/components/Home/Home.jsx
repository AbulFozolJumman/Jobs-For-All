import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobs = useLoaderData()
    return (
        <div>
            <Header></Header>
            <Main jobs={jobs}></Main>
        </div>
    );
};

export default Home;