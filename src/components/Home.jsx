import React from 'react';
import Title from './Title';
import Settings from './Settings';
import Button from './Button';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Title />
            <Settings />
            <Link to="/questions"><Button /></Link>
        </div>
    );
};

export default Home;
