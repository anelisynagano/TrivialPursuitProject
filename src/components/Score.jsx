import React from 'react';

const Score = ({ onScore, settings }) => {
    return (

        <div className="p-3">
            <h1>
                <span>Congrats </span>
                {settings.playerName}
                !
                Your Score is:
            </h1>
            <div className="score">
                <h2>
                    {onScore}
                </h2>
            </div>
        </div>
    );
};

export default Score;
