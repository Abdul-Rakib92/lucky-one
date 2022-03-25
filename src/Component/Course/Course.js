import React, { useEffect, useState } from 'react';
import './Course.css';

const Course = () => {
    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])


    return (
        <div>
            <h1>Online Learning Course</h1>
            <div className='course-container'>
                <div className="subjects-container">
                    <h3>This is course: {courses.length}</h3>

                </div>
                <div className="cart-container">
                    <h3>Selected Course</h3>

                </div>
            </div>
        </div>
    );
};

export default Course;