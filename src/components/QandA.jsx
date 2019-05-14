import React, { Component } from 'react';
import { shuffle } from 'lodash';
import Answer from './Answer';
import Button from './Button';

class QandA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAnswer: "",
            shuffledAnswers: [],
            isSubmitted: false,
            isAnswerSubmitted: false
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

    handleSubmitScore = () => {
        const { question, onScore } = this.props;
        const { selectedAnswer } = this.state;
        const score = (selectedAnswer === question.correct_answer) ? 5 : 0;
        onScore(score);

        this.setState({
            isSubmitted: true,
            isAnswerSubmitted: true
        });
    }

    render() {
        const { question } = this.props;
        const {
            selectedAnswer, shuffledAnswers, isSubmitted, isAnswerSubmitted
        } = this.state;

        return (
            <div className="py-4">
                <div className="bg-warning p-3 mb-3 rounded">{(question.question)}</div>
                {shuffledAnswers.map((answer) => {
                    return (
                        <Answer
                            key={answer}
                            isCorrectAnswer={question.correct_answer === answer}
                            answer={answer}
                            isSubmitted={isSubmitted}
                            isSelected={selectedAnswer === answer}
                            onSelect={this.handleSelectAnswer}
                            disabled={isAnswerSubmitted}
                        />
                    );
                })}
                <Button
                    text="Next"
                    onClick={this.handleSubmitScore}
                    disabled={isAnswerSubmitted}
                />
            </div>
        );
    }
}

export default QandA;
