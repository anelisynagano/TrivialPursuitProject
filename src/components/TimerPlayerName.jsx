import React from 'react';
import Timer from 'react-compound-timer';

const TimerPlayerName = (handleClickPlayerName) => {
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
            {/* player={player} handleClickPlayerName={handleClickPlayerName} />       */}
        </div>
    );
};

export default TimerPlayerName;
