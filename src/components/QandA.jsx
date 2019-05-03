import React from 'react';
import { shuffle } from 'lodash';
import Answer from './Answer';
import Button from './Button';

const QandA = (props) => {
    const { question } = props;
    const shuffledAnswer = shuffle([question.correct_answer, ...question.incorrect_answers]);
    console.log(question.correct_answer);
    return (
        <div>
            <div className="bg-warning p-3 mb-3 rounded">{(question.question)}</div>
            {shuffledAnswer.map((answer) => {
                return (
                    <div key={answer} className="border border-warning p-3 mb-3 rounded">{answer}</div>
                );
            })}
            <Answer />
            <Button />

        </div>
    );
};

export default QandA;
