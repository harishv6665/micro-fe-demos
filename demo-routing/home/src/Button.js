import React from 'react';

const Button = ({ title }) => {
    return (
        <button>
            {title || 'Click here -- cache test'}
        </button>
    );
};

export default Button;
