import React from 'react';
import Timer from 'react-compound-timer';

const TimerPlayerName = ({ settings }) => {
    const handleTimesUp = () => {
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
            <div>
                {
                    settings.selectedDifficulty && (
                        <p>
                            Difficulty:
                            {settings.selectedDifficulty}
                            | Category:
                            {settings.selectedCategory.name}
                            | Player Name:
                            {settings.playerName}
                        </p>
                    )}
            </div>
        </div>
    );
};

export default TimerPlayerName;
