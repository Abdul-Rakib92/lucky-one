import React from 'react';
import './Topic.css';

const Topic = (props) => {
    const {picture, price, name} = props.course;
    // const {handleSelectedCourse} = props;
    return (
        <div className='topic'>
            <img src={picture} alt="" />

            <div>
                <h4 className='topic-name'>{name}</h4>
                <h4>Course Fee: ${price}</h4>
            </div>

           
            <button onClick={() => props.handleSelectedCourse(props.course)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
            </button>
            
        </div>
        
    );
};

export default Topic;