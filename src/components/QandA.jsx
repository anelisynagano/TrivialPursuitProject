import React from 'react';
import Answer from './Answer';
import Button from './Button';

const QandA = () => {
    return (
        <div>

            <div className="bg-warning p-3 mb-3 rounded">What would Diogo do?</div>
            <div className="border border-warning p-3 mb-3 rounded">A: Tell you to Google it! </div>
            <div className="border border-warning p-3 mb-3 rounded"> B: Give you assistance.</div>
            <div className="border border-warning p-3 mb-3 rounded"> C: Roll his eyes...</div>
            <div className="border border-warning p-3 mb-3 rounded"> D: *remove headphones* What?</div>

            <Answer />
            <Button />

        </div>
    );
};

export default QandA;
