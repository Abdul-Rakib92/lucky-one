import React from 'react';
import './Course.css';

const Course = () => {
    return (
        <div>
            <h1>Online Learning Course</h1>
            <div className='course-container'>
                <div className="subjects-container">
                    <h3>This is course</h3>

                </div>
                <div className="cart-container">
                    <h3>Selected Course</h3>

                </div>
            </div>
        </div>
    );
};

export default Course;