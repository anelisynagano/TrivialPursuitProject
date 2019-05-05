import React from 'react';

const Button = ({ text, onClick }) => {
    return (
        <div>
            <button className="btn btn-outline-secondary mt-3" type="button" onClick={onClick}>{text || "Button"}</button>
        </div>
    );
};

export default Button;