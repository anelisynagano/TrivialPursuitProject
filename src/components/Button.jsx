import React from 'react';

const Button = ({ text, onClick, disabled }) => {
    return (
        <button
            className="btn btn-outline-dark mt-3 mr-3"
            type="button"
            disabled={disabled}
            onClick={onClick}
        >
            {text || "Button"}
        </button>
    );
};

export default Button;
