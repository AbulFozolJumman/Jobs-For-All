import React from 'react';
import "./Job.css"
import { Link } from 'react-router-dom';
const Job = ({job}) => {
    const {logo, designation, companyName, location, salary, jobType, symbol} = job;

    return (
        <div id='job'>
            <img className='logo' src={logo} alt="" />
            <h3>{designation}</h3>
            <h4 id='name'>{companyName}</h4>
            <button className='btn-secondary'>{jobType}</button>
            <button className='btn-secondary'>Fulltime</button>
            <div id='location-salary'>
                <p id='location'>
                    <img src="https://i.ibb.co/9nySt2D/Frame-4.png" alt="" />
                    <span>{location}</span>
                </p>
                <p id='salary'>
                    <img src="https://i.ibb.co/R2r5S4s/Frame.png" alt="" />
                    <span>{salary}</span>
                </p>
            </div>
            <Link to={`jobDetails/${symbol}`}>
                <button className="btn-primary">Job Details</button>
            </Link>
        </div>
    );
};

export default Job;