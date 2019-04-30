import React from 'react';
import Answer from './Answer';
import Button from './Button';

const QandA = (props) => {
    const { question } = props;
    return (
        <div>
            <div className="bg-warning p-3 mb-3 rounded">{question.question}</div>
            <div className="border border-warning p-3 mb-3 rounded">{question.correct_answer}</div>
            <div className="border border-warning p-3 mb-3 rounded">{question.incorrect_answers[0]}</div>
            <div className="border border-warning p-3 mb-3 rounded">{question.incorrect_answers[1]}</div>
            <div className="border border-warning p-3 mb-3 rounded">{question.incorrect_answers[2]}</div>

            <Answer />
            <Button />

        </div>
    );
};

export default QandA;
