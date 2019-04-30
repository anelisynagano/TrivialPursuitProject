import React, { Component } from 'react';
import Home from './Home';


class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            questions:[],
        };
    }

    loadQuestions = () => {
        fetch("https://opentdb.com/api.php?amount=3")
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    questions: data.results,
                });
            });
    };

    render() {
        console.log(this.state);
        return (
            <div>
                <Home />
                <button onClick={this.loadQuestions} type="submit">Load</button>


            </div>
        );
    }
};

export default App;
