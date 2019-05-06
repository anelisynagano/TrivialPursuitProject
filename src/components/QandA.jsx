import React, { Component } from 'react';
import { shuffle } from 'lodash';
import Answer from './Answer';

class QandA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAnswer: "Black"
        };
    }

    render() {
        const { question } = this.props;
        const { selectedAnswer } = this.state;
        const shuffledAnswer = shuffle([question.correct_answer, ...question.incorrect_answers]);
        console.log(question);
        return (
            <div>
                <div className="bg-warning p-3 mb-3 rounded">{(question.question)}</div>
                {shuffledAnswer.map((answer) => {
                    return (
                        <Answer key={answer} answer={answer} isSelected={selectedAnswer === answer} />
                    );
                })}

            </div>
        )};
};

export default QandA;
