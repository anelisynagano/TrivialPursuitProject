import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


class Settings extends Component {
    constructor (props) {
        super(props);
        this.state = {
            difficulty: '',
            category: '',
            playerName: 'hello',
        };
    }

    componentDidMount() {
        this.loadCategory();
    }

    loadCategory = () => {
        fetch("https://opentdb.com/api_category.php")
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    category: data.results.trivia_categories,
                });
            });
    };

    handleChange = (e) => {
        this.setState({ playerName: e.target.value });
    }
    
    handleDifficultySelect = (key, event) => {
        event.preventDefault();
        this.setState({ difficulty: event.target.id });
    }

    handleCategorySelect = (key, event) => {
        event.preventDefault();
        this.setState({ category: event.target.id });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { handleSubmitPlayerName } = this.props;
        const { text } = this.state;

        handleSubmitPlayerName(text);
        this.setState({ text: '' });
    }

    render () {
        console.log(this.state);
        const { playerName, difficulty, category } = this.state;
        return (
            <div className="border p-4 rounded">

                <Dropdown className="mb-3" onSelect={this.handleDifficultySelect}>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                        {
                            difficulty.charAt(0).toUpperCase() + difficulty.substr(1).toLowerCase()
                            || "Difficulty"
                        }
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item id="easy">Easy</Dropdown.Item>
                        <Dropdown.Item id="medium">Medium</Dropdown.Item>
                        <Dropdown.Item id="hard">Hard</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="mb-3" onSelect={this.handleCategorySelect}>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                        {
                            category.charAt(0).toUpperCase() + category.substr(1).toLowerCase()
                            || "Category"
                        }

{/* put this to work, to show all categories and change when selected */}

                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item id="action-1">General Knowledge</Dropdown.Item>
                        <Dropdown.Item id="action-2">Entertainment: Television</Dropdown.Item>
                        <Dropdown.Item id="action-3">Science and Nature</Dropdown.Item>
                        <Dropdown.Item id="action-4">Sports</Dropdown.Item>
                        <Dropdown.Item id="action-5">Geography</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <InputGroup className="mb-3">
             
                    <FormControl
                        placeholder="Player Name"
                        aria-label="Playername"
                        name="playerName"
                        value={playerName}
                        onChange={this.handleChange}
                    />
                </InputGroup>
            </div>
        );
    }
}

export default Settings;
