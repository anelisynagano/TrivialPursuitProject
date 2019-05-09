import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const ScorePage = () => {
    return (
        <div>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://anelisynagano.github.io/TrivialPursuitProject/scorepage">
                <Button text="Share on Facebook" />
            </a>
            <Button text="Invite a friend to play" />
            <Link to="/"><Button text="Play Again" /></Link>

        </div>
    );
};

export default ScorePage;
