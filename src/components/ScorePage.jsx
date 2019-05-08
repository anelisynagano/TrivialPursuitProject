import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const ScorePage = () => {
    return (
        <div>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=https://anelisynagano.github.io/TrivialPursuitProject/`} >
                <Button>
                    Share on Facebook
                </Button>
            </a>
            <Link to="/"><Button text="Play Again" /></Link>

        </div>
    );
};

export default ScorePage;
