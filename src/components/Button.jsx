import React from 'react';

const Button = ({ text, onClick, disabled }) => {
    return (
        <button
            className="btn btn-outline-dark"
            type="button"
            disabled={disabled}
            onClick={onClick}
        >
            {text || "Button"}
        </button>
    );
};

export default Button;
