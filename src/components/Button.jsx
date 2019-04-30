import React from 'react';

const Button = ({ text }) => {
    return (
        <div>
            <button className="btn btn-outline-secondary mt-3" type="button">{text || "Button"}</button>
        </div>
    );
};

export default Button;