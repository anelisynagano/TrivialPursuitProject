import React from 'react';
import Timer from 'react-compound-timer';

const TimerPlayerName = ({ settings }) => {
    console.log(settings);
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
                <p>
                    Difficulty:
                    {settings.difficulty.charAt(0).toUpperCase()
                    + settings.difficulty.substr(1).toLowerCase()}
                    |
                    Category:
                    {settings.selectedCategory.name}
                    |
                    Player Name:
                    {settings.playerName}
                </p>

            </div>
        </div>
    );
};

export default TimerPlayerName;
