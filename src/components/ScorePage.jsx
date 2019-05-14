import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from './Button';
import Score from './Score';

class ScorePage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: '',
            copied: false
        };
    }

    render () {
        const { onScore, settings } = this.props;
        const { selectedCategory, selectedDifficulty } = settings;
        const { copied } = this.state;

        const shareLink = () => {
            if (selectedCategory.id === '' || selectedDifficulty === '') {
                return "https://anelisynagano.github.io/TrivialPursuitProject/";
            }
            return `https://anelisynagano.github.io/TrivialPursuitProject/share/${settings.selectedDifficulty}/${settings.selectedCategory.id}`;
        };

        return (
            <div className="page-content">
                <Score onScore={onScore} settings={settings}/>
                <p>{shareLink()}</p>
                <CopyToClipboard
                    text={shareLink()}
                    onCopy={() => this.setState({ copied: true })}
                >
                    <Button type="button" text="Copy to Share" />
                </CopyToClipboard>
                {copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
                <p>
                    <Link to="/"><Button text="Play Again" /></Link>
                </p>
            </div>
        );
    }
}

export default ScorePage;
