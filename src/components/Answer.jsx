import React from 'react';

const Answer = ({ answer, isSelected }) => {
    const selectedClass = () => {
        return (isSelected ? "bg-primary" : "");
    };

    const handleSelectAnswer = () => {
        
        console.log('SelectAnswer clicked');
    };

    return (
        <div
            role="presentation"
            className={`border border-dark p-3 mb-3 rounded ${selectedClass}`}
            onClick={handleSelectAnswer}
        >
            {answer}
        </div>
    );
};

export default Answer;
