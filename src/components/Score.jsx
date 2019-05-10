import React from 'react';

const Score = ({ onScore }) => {
    console.log(onScore);
    return (

        <div className="p-3">
            <h1>Your Score</h1>
            <div className="score">
                <h2>
                    {onScore}
                </h2>
            </div>
        </div>
    );
};

export default Score;
