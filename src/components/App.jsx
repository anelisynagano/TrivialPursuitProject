import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Questions from './Questions';
import ScorePage from './ScorePage';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            questions: [],
            settings: { },
            score: 0,
            questionsAnswered: 0
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
        this.loadQuestions(settings.difficulty, settings.selectedCategory.id); //loadquestions here
        this.props.history.push('/questions'); //redirect to /questions
    }

    handleScore = (score) => {
        const { questionsAnswered } = this.state;
        this.setState({
            score: this.state.score + score,
            questionsAnswered: questionsAnswered + 1
        });
    }


    render() {
        const { questions, settings, questionsAnswered, score } = this.state;
        return (
            <Switch>
                <Route exact path="/" render={props => <Home {...props} onSettings={this.handleSettings} />} />
                <Route
                    path="/questions"
                    render={props => (
                        <Questions
                            {...props}
                            questions={questions}
                            onScore={this.handleScore}
                            settings={settings}
                            isComplete={questionsAnswered === questions.length}
                        />
                    )}
                />
                <Route path="/scorepage" render={props => <ScorePage {...props} onScore={score} />} />
            </Switch>
        );
    }
}

export default withRouter(App);
