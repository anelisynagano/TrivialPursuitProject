import React, { Component } from 'react';
import { shuffle } from 'lodash';
import Answer from './Answer';
import Button from './Button';

class QandA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAnswer: '$95 Million',
        };
    }

    checkSelected = () => {
        this.setState({
            selectedAnswer: ""
        });
    };

    render() {
        const { question } = this.props;
        const shuffledAnswer = shuffle([question.correct_answer, ...question.incorrect_answers]);
        console.log(question);
        return (
            <div>
                <div className="bg-warning p-3 mb-3 rounded">{(question.question)}</div>
                {shuffledAnswer.map((answer) => {
                    return (
                        <div key={answer} role="presentation" className={`border border-dark p-3 mb-3 rounded${this.checkSelected}`}>{answer}</div>
                    );
                })}
                <Answer />
                <Button />

            </div>
        )};
};

export default QandA;
