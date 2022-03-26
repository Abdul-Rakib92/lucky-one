import React, { useEffect, useState } from 'react';
import Choose from '../Choose/Choose';
import Topic from '../Topic/Topic';
import './Course.css';

const Course = () => {
    const [courses, setCourses] = useState([]);
    const [cart, setCart]= useState([]);

    useEffect( () => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, []);

    const handleSelectedCourse = (course) => {
        console.log(course);
        const newCart = [...cart, course];
        setCart(newCart);

    }


    return (
        <div>
            <h1>Online Learning Course</h1>
            <div className='course-container'>
                <div className="subjects-container">
                    {
                        courses.map(course => <Topic 
                            key={course.id}
                            course = {course}
                            handleSelectedCourse = {handleSelectedCourse}
                            ></Topic>)
                    }
                </div>
                <div className="cart-container">
                    <h3>Selected Course</h3>
                    <h5>Selected Item{cart.length}</h5>
                    {cart.map((item) => (
                        <p>{item.name} </p>
                    ))}
                    <Choose></Choose>

                </div>
            </div>
        </div>
    );
};

export default Course;