import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class Settings extends Component {
    constructor (props) {
        super(props);
        this.state = {
            difficulty: '',
            categories: [],
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
                    categories: data.trivia_categories,
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
        this.setState({ categories: event.target.id });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { handleSubmitPlayerName } = this.props;
        const { text } = this.state;

        handleSubmitPlayerName(text);
        this.setState({ text: '' });
    }

    render () {
        const { playerName, difficulty, categories } = this.state;
        const { Toggle, Menu, Item } = Dropdown;
        return (
            <div className="border p-4 rounded">

                <Dropdown className="mb-3" onSelect={this.handleDifficultySelect}>
                    <Toggle variant="warning" id="dropdown-basic">
                        {
                            difficulty.charAt(0).toUpperCase() + difficulty.substr(1).toLowerCase()
                            || "Difficulty"
                        }
                    </Toggle>
                    <Menu>
                        <Item id="easy">Easy</Item>
                        <Item id="medium">Medium</Item>
                        <Item id="hard">Hard</Item>
                    </Menu>
                </Dropdown>

                <Dropdown className="mb-3" onSelect={this.handleCategorySelect}>
                    <Toggle variant="warning" id="dropdown-basic">
                        {"Category"}

                    </Toggle>
                    <Menu>
                        {
                            categories.map(category => <Item key={category.id}>{category.name}</Item>)
                        }
                    </Menu>
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
