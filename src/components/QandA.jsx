import React, { Component } from 'react';
import { shuffle } from 'lodash';
import Answer from './Answer';

class QandA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAnswer: "",
            shuffledAnswers: []
        };
    }

    componentDidMount() {
        const { question } = this.props;
        const shuffledAnswers = shuffle([question.correct_answer, ...question.incorrect_answers]);
        this.setState({ shuffledAnswers });
    }

    handleSelectAnswer = (answer) => {
        this.setState({
            selectedAnswer: answer
        });
    }
    
    render() {
        const { question } = this.props;
        const { selectedAnswer, shuffledAnswers } = this.state;
        return (
            <div>
                <div className="bg-warning p-3 mb-3 rounded">{(question.question)}</div>
                {shuffledAnswers.map((answer) => {
                    return (
                        <Answer
                            key={answer}
                            answer={answer}
                            isSelected={selectedAnswer === answer}
                            onSelect={this.handleSelectAnswer}
                        />
                    );
                })}

            </div>
        )}
};

export default QandA;
