import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Questions from './Questions';


class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            questions: [],
            settings: { },
            score: 0
        };
    }

    loadQuestions = (difficulty, category) => {
        fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    questions: data.results,
                });
            });
    };

    handleSettings = (settings) => {
        this.setState({ settings }); //submit difficulty,category and player name //
        this.loadQuestions(settings.difficulty, settings.selectedCategoryId); //loadquestions here
        this.props.history.push('/questions'); //redirect to /questions
    }

    handleScore = (score) => {
        this.setState({ score: this.state.score + score });
    }


    render() {
        const { questions } = this.state;
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={props => <Home {...props} onSettings={this.handleSettings} />} />
                    <Route path="/questions" render={props => <Questions {...props} questions={questions} onScore={this.handleScore} />} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
