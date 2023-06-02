import React from 'react';
import "./Main.css"
import Category from '../Category/Category';
import Jobs from '../Jobs/Jobs';
const Main = ({jobs}) => {
    return (
        <main>
            <Category></Category>
            <Jobs jobs={jobs}></Jobs>
        </main>
    );
};

export default Main;