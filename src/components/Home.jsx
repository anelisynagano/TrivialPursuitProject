import React from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import Settings from './Settings';
import Button from './Button';

const Home = ({ onSettings }) => {
    return (
        <div className="page-content">
            <Title />
            <Settings onSettings={onSettings} />
            <Link to="/aboutus"><Button text="About Us" /></Link>
        </div>
    );
};

export default Home;
