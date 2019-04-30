import React from 'react';
import Timer from 'react-compound-timer';

const TimerPlayerName = () => {
    const handleTimesUp = () => {
        console.log('Go to next question');
    };

    return (
        <div>
            <Timer
                checkpoints={[
                    {
                        time: 3000,
                        callback: handleTimesUp
                    }
                ]}
            >
                <Timer.Seconds />
            </Timer>
        </div>
    );
};

export default TimerPlayerName;
