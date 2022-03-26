import React from 'react';
import './Choose.css';

const Choose = (props) => {
    return (
        <div>
             <div>
             <button className='btn-one'> 
                <p className='btn-text'>Choose 1 For Me</p>
            </button>
             </div>

            <div>
            <button className='btn-two'> 
                <p className='btn-text'>Choose Again</p>
            </button>
            </div>
        </div>
    );
};

export default Choose;