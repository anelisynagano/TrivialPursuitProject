import React from 'react';

const Button = ({ text, onClick, disabled }) => {
    return (
        <div>
            <button
                className="btn btn-outline-secondary mt-3"
                type="button"
                disabled={disabled}
                onClick={onClick}
            >
                {text || "Button"}
            </button>
        </div>
    );
};

export default Button;