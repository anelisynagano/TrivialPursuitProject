import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Questions from './Questions';


class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            questions: [],
            settings: { },
        };
    }

    componentDidMount() {
        this.loadQuestions();
    }

    loadQuestions = (difficulty, category) => {
        fetch(`https://opentdb.com/api.php?amount=10&${category}&${difficulty}&type=multiple`)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    questions: data.results,
                });
            });
    };

    handleSettings = (settings) => {
        this.setState({ settings });
        
    }

    render() {
        const { questions } = this.state;
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={props => <Home {...props} onSettings={this.handleSettings} />} />
                    <Route path="/questions" render={props => <Questions {...props} questions={questions} />} />
                </Switch>
            </div>
        );
    }
}

export default App;
