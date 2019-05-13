import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Title from './Title';
import TimerPlayerName from './TimerPlayerName';
import QandA from './QandA';
import Button from './Button';

const Questions = ({
    questions,
    onScore,
    settings,
    isComplete,
    onTimesUp
}) => {
    if (!settings.selectedCategory) {
        return <Redirect to="/" />;
        //redirect if user refreshes questions page
    }
    return (
        <div className="page-content">
            <Title />
            <TimerPlayerName settings={settings} onTimesUp={onTimesUp} />
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
