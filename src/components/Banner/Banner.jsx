import React from 'react';
import "./Banner.css"
const Banner = () => {
    return (
        <section id='banner'>
            <div>
                <h1 id='title'>One Step <br />
                    Closer To Your <br />
                    <span id='highlights'>Dream Job</span>
                </h1>
                <p>
                    Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                <button className='btn-primary'>Get Started</button>
            </div>
            <img src="https://i.ibb.co/p0cY6PF/P3-OLGJ1-copy-1.png" alt="" />
        </section>
    );
};

export default Banner;