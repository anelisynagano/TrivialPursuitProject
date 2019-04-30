import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Questions from './Questions';


class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            questions:[],
        };
    }

    componentDidMount() {
        this.loadQuestions();
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
        const { questions } = this.state;
        console.log(questions);
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/questions" render={props => <Questions {...props} questions={questions} />} />
                </Switch>
                            
            </div>
        );
    }
};

export default App;
