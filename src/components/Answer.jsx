import React from 'react';

const Answer = ({
    answer,
    isSelected,
    onSelect,
    isCorrectAnswer,
    isSubmitted,
    disabled
}) => {
    const selectedClass = () => {
        return (isSelected ? "border-info border-1" : "border-dark");
    };

    const correctClass = () => {
        if (isSubmitted && isSelected) {
            return (isCorrectAnswer ? "bg-success" : "bg-danger");
        }
        return "";
    };

    const handleSelectAnswer = () => {
        return disabled ? "" : onSelect(answer);
    };

    return (
        <div
            role="presentation"
            className={`border p-3 mb-3 rounded ${selectedClass()} ${correctClass()} `}
            onClick={handleSelectAnswer}
        >
            {answer}
        </div>
    );
};

export default Answer;
