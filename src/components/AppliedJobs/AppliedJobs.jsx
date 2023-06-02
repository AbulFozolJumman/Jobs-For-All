import React, { useEffect, useState } from 'react';
import { getFromDb } from '../utilities';
import "./AppliedJobs.css"

const AppliedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then (data => setJobs(data))
    }, [])
    const hhh = getFromDb();
    const {ABNB, TSLA, AAPL, MSFT, NFLX, GOOGL} = hhh;
    const AppliedJobs1 = jobs.find(job => job.id == ABNB);
    const AppliedJobs2 = jobs.find(job => job.id == TSLA);
    const AppliedJobs3 = jobs.find(job => job.id == AAPL);
    const AppliedJobs4 = jobs.find(job => job.id == MSFT);
    const AppliedJobs5 = jobs.find(job => job.id == NFLX);
    const AppliedJobs6 = jobs.find(job => job.id == GOOGL);
    const a = [AppliedJobs1 ? AppliedJobs1 : "", 
                AppliedJobs2 ? AppliedJobs2 : "", 
                AppliedJobs3 ? AppliedJobs3 : "", 
                AppliedJobs4 ? AppliedJobs4 : "", 
                AppliedJobs5 ? AppliedJobs5 : "", 
                AppliedJobs6 ? AppliedJobs6 : ""];
    return (
        <div>
            <h1 id='applied-jobs-title'>Applied Jobs</h1>
            {
                a.map(b =>
                        b && 
                        <div id='applied-jobs'>
                            <img className='logo' src={b.logo} alt="" />
                            <div>
                                <h3>{b.designation}</h3>
                                <h4 id='name'>{b.companyName}</h4>
                                <button className='btn-secondary'>{b.jobType}</button>
                                <button className='btn-secondary'>Fulltime</button>
                                <div id='location-salary'>
                                    <p id='location'>
                                        <img src="https://i.ibb.co/9nySt2D/Frame-4.png" alt="" />
                                        <span>{b.location}</span>
                                    </p>
                                    <p id='salary'>
                                        <img src="https://i.ibb.co/R2r5S4s/Frame.png" alt="" />
                                        <span>{b.salary}</span>
                                    </p>
                                </div>
                            </div>
                            <button className="btn-primary">Job Details</button>
                        </div>
                    )
            }
        </div>
    );
};

export default AppliedJobs;