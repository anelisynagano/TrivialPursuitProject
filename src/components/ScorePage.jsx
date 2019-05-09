import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Score from './Score';

const ScorePage = ({ onScore, settings }) => {
    return (
        <div>
            <Score onScore={onScore} />
            <a href={`https://www.facebook.com/sharer/sharer.php?u=https://anelisynagano.github.io/TrivialPursuitProject/share/${settings.difficulty}/${settings.selectedCategory.id}`}>
                <Button text="Share on Facebook" />
            </a>
            <Link to="/"><Button text="Play Again" /></Link>

        </div>
    );
};

export default ScorePage;
