import React from 'react';


const Score = (props) => {
    const { score } = props;

    return (

        <div>
            <div className="score">{score.question}</div>
            <h1>Your Score</h1>
        </div>
    );
};

export default Score;
