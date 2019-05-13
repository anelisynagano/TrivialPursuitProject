import React from 'react';
import Timer from 'react-compound-timer';

const TimerPlayerName = ({ settings, onTimesUp }) => {
    return (
        <div>
            <Timer
                initialTime={10000}
                direction="backward"
                checkpoints={[
                    {
                        time: 0,
                        callback: () => onTimesUp(),
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
