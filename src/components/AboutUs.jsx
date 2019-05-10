/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const AboutUs = () => {
    return (
        <div className="page-content mb-3">
            <h1 className="p-3">About Us</h1>
            <p>
                This is our second project as students at Wild Code School Lisbon campus.
                Our task was to make a WebApp, putting in practice our skills learned in class about
               ReactJS and API, also using our previously learned skills on HTML, Bootstrap and CSS.
            </p>
            <div className="row">
                <div className="col"><img src="https://i.imgur.com/Lk4BRHz.jpg" alt="" /></div>
                <div className="col"><img src="https://i.imgur.com/Zc4ULUa.jpg" alt="" /></div>
            </div>

            <div className="row">
                <div className="col">Anelisy Nagano</div>
                <div className="col">Raquel Moreira</div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <a href="https://www.linkedin.com/in/anelisynagano/" className="fa fa-linkedin" target="_blank" rel="noopener noreferrer" />
                    <a href="https://github.com/anelisynagano" className="fa fa-github" target="_blank" rel="noopener noreferrer" />
                </div>
                <div className="col">
                    <a href="https://www.linkedin.com/in/moreiraraquel/" className="fa fa-linkedin" target="_blank" rel="noopener noreferrer" />
                    <a href="https://github.com/Raki20" className="fa fa-github" target="_blank" rel="noopener noreferrer" />
                </div>
            </div>

            <Link to="/"><Button text="Return to game" /></Link>
        </div>

    );
};

export default AboutUs;
