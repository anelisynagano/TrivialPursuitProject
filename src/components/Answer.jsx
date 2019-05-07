import React from 'react';

const Answer = ({ answer, isSelected, onSelect }) => {
    const selectedClass = () => {
        return (isSelected ? "bg-info" : "");
    };

    const handleSelectAnswer = () => {
        console.log('Selected');
        onSelect(answer);
    };

    return (
        <div
            role="presentation"
            className={`border border-dark p-3 mb-3 rounded ${selectedClass()}`}
            onClick={handleSelectAnswer}
        >
            {answer}
        </div>
    );
};

export default Answer;