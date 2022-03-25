import React from 'react';
import './Topic.css';

const Topic = (props) => {
    const {id, picture, price, name} = props.course;
    return (
        <div className='topic'>
            <img src={picture} alt="" />
        </div>
    );
};

export default Topic;