import React, { useState } from 'react';
import Job from '../Job/Job';
import "./Jobs.css"

const Jobs = ({jobs}) => {
  const [showAll, setShowAll] = useState(false);
  const hnadleShowAll = () => {
    setShowAll(true);
  };
    return (
        <div>
            <div className="title">
                <h2>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div id="jobs">
                {
                    jobs?.slice(0, showAll ? 6 : 4).map((job, index) => <Job key={index} job={job}></Job>)
                }
            </div>

            {!showAll && (
        <span onClick={hnadleShowAll}>
        <button id="see-all-btn" className="btn-primary">See All</button>
        </span>
      )}


        </div>
    );
};

export default Jobs;