import React, { useState } from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <h2>Jobs For All</h2>
            {/* <div className='nav-links'>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/applied-jobs">Applied Jobs</Link>
                    <Link to="/blog">Blog</Link>
                </div>
                <button className='btn-primary'>Start Applying</button>
            </div> */}

            <div onClick={() => setOpen(!open)} className='hidden'>
                <span>
                    {
                        open === true ?
                            "///"
                            : "|||"
                    }
                </span>
            </div>
            
            <div className={`nav-links ${open ? 'top' : 'top-m'}`}>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/applied-jobs">Applied Jobs</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/error">Error</Link>

                </div>
                <button className='btn-primary'>Start Applying</button>
            </div>



        </nav>
    );
};

export default Navbar;