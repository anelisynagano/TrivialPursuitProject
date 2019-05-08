import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import TimerPlayerName from './TimerPlayerName';
import QandA from './QandA';
import Button from './Button';

const Questions = ({ questions, onScore, settings, isComplete }) => {

    return (
        <div>
            <Title />
            <TimerPlayerName settings={settings} />
            {questions.map((question) => {
                return (
                    <QandA onScore={onScore} key={question.question} question={question} />
                );
            })}
            {/* show button only if all questions are complete */}
            { isComplete && (
                <Link to="/scorepage">
                    <Button text="Your Score" />
                </Link>
            )}

        </div>
    );

};

export default Questions;
