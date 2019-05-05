import React from 'react';
import Title from './Title';
import Settings from './Settings';

const Home = ({ onSettings }) => {
    return (
        <div>
            <Title />
            <Settings onSettings={onSettings} />
        </div>
    );
};

export default Home;
