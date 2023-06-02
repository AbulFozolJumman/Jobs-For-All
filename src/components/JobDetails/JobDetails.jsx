import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import "./JobDetails.css"
import { addToDb } from '../utilities';

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const jobFinder = jobs.find(job => job.symbol == id);

    return (
        <div id='job-details'>
            <div id='description'>
                <p><span>Job Description: </span>
                {jobFinder.jobDescription}
                </p>
                <p><span>Job Responsibilities: </span>
                {jobFinder.jobResponsibilities}
                </p>
                <p><span>Educational Requirements: </span>
                {jobFinder.educationalRequirements}
                </p>
                <p><span>Experience Requirements: </span>
                {jobFinder.experienceRequirements}
                </p>
            </div>
            <div id='contact'>
                <h3>Job Details</h3> <hr />
                <p><span>Salary: </span>
                {jobFinder.salary}
                </p>
                <p><span>Job Title: </span>
                {jobFinder.designation}
                </p>
                <h3>Contact Information</h3> <hr />
                <p><span>Phone: </span>
                {jobFinder.phone}
                </p>
                <p><span>Email: </span>
                {jobFinder.email}
                </p>
                <p><span>Address: </span>
                {jobFinder.address}
                </p>
                <button onClick={() => addToDb(jobFinder.id, jobFinder.symbol)} className='btn-primary'>Apply Now</button>
            </div>
        </div>
    );
};

export default JobDetails;