import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Score from './Score';

const ScorePage = ({ onScore, settings }) => {
    console.log(settings);
    return (
        <div className="page-content">
            <Score onScore={onScore} settings={settings} />
            <a href={`https://www.facebook.com/sharer/sharer.php?u=https://anelisynagano.github.io/TrivialPursuitProject/share/${settings.selectedDifficulty}/${settings.selectedCategory.id}`}>
                <Button text="Invite a friend to play" />
            </a>
            <Link to="/"><Button text="Play Again" /></Link>
        </div>
    );
};

export default ScorePage;
