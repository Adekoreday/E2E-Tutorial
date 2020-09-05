import React from 'react';
import './index.css';


const Button = ({ handleClick, userId, planId, children }) => {

    const Subscribe = (userId, planId) => {
        handleClick({userId, planId});
    }
    return (
        <button className="button" onClick={() => Subscribe(userId, planId)}>
            {children}
        </button>
    );
};

export default Button;