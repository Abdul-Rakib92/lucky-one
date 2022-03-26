import React from 'react';
import './Topic.css';

const Topic = (props) => {
    const {course, handleSelectedCourse} = props;
    const {picture, price, name} = course;
    return (
        <div className='topic'>
            <img src={picture} alt="" />

            <div>
                <h4 className='topic-name'>{name}</h4>
                <h4>Course Fee: ${price}</h4>
            </div>

           
            <button onClick={() => handleSelectedCourse(course)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
            </button>
            
        </div>
        
    );
};

export default Topic;