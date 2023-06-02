import React from 'react';
import "./Category.css"
const Category = () => {
    return (
        <section>
            <div className="title">
                <h2>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div id="categories">
                    <div className="category">
                        <img src="https://i.ibb.co/bN20cvQ/accounts-1.png" alt="" />
                        <h3 className='category-title'>Account & Finance</h3>
                        <p>300 Jobs Available</p>
                    </div>
                    <div className="category">
                        <img src="https://i.ibb.co/PxPQYrG/business-1.png" alt="" />
                        <h3 className='category-title'>Creative Design</h3>
                        <p>100+ Jobs Available</p>
                    </div>
                    <div className="category">
                        <img src="https://i.ibb.co/5GnbQn8/social-media-1.png" alt="" />
                        <h3 className='category-title'>Marketing & Sales</h3>
                        <p>150 Jobs Available</p>
                    </div>
                    <div className="category">
                        <img src="https://i.ibb.co/MS7dGBq/chip-1.png" alt="" />
                        <h3 className='category-title'>Engineering Job</h3>
                        <p>224 Jobs Available</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Category;