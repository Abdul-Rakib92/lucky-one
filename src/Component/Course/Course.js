import React, { useEffect, useState } from 'react';
import Topic from '../Topic/Topic';
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
                    {
                        courses.map(course => <Topic 
                            key={course.id}
                            course = {course}
                            ></Topic>)
                    }
                </div>
                <div className="cart-container">
                    <h3>Selected Course</h3>

                </div>
            </div>
        </div>
    );
};

export default Course;