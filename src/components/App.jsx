import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Questions from './Questions';
import ScorePage from './ScorePage';
import AboutUs from './AboutUs';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            questions: [],
            settings: {},
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
        const { history } = this.props;
        this.setState({ settings }); // submit difficulty,category and player name //
        this.loadQuestions(
            settings.selectedDifficulty,
            settings.selectedCategory.id
        ); // loadquestions here
        history.push('/questions'); // redirect to /questions
    }

    handleScore = (sumScore) => {
        const { questionsAnswered, score } = this.state;
        this.setState({
            score: score + sumScore,
            questionsAnswered: questionsAnswered + 1
        });
    }

    handleTimesUp = () => {
        const { history } = this.props;
        alert('Sorry, your time is up!');
        history.push('/scorepage');
    }

    render() {
        const {
            questions,
            settings,
            questionsAnswered,
            score
        } = this.state;
        return (
            <Switch>
                <Route exact path="/" render={props => <Home {...props} onSettings={this.handleSettings} />} />
                <Route path="/share/:difficulty/:categoryId" render={props => <Home {...props} onSettings={this.handleSettings} />} />
                <Route
                    path="/questions"
                    render={props => (
                        <Questions
                            {...props}
                            questions={questions}
                            onScore={this.handleScore}
                            settings={settings}
                            isComplete={questionsAnswered === questions.length}
                            onTimesUp={this.handleTimesUp}
                        />
                    )}
                />
                <Route path="/scorepage" render={props => <ScorePage {...props} onScore={score} onSettings={this.handleSettings} settings={settings} />} />
                <Route path="/aboutus" component={AboutUs} />
            </Switch>
        );
    }
}

export default withRouter(App);
