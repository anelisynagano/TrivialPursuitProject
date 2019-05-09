import React from 'react';
import Title from './Title';
import Settings from './Settings';

const Home = ({ onSettings }) => {
    return (
        <div className="w-100">
            <Title />
            <Settings onSettings={onSettings} />
        </div>
    );
};

export default Home;
