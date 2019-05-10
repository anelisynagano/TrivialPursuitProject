import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from './Button';

const availableDifficulties = ['easy', 'medium', 'hard'];

class Settings extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedCategory: { id: '', name: '' },
            selectedDifficulty: '',
            categories: [],
            playerName: '',
            isSettingsBlocked: false,
        };
    }

    componentDidMount() {
        this.loadCategories();
    }

    loadCategories = () => {
        fetch("https://opentdb.com/api_category.php")
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    categories: data.trivia_categories,
                });
                this.loadPresets(data.trivia_categories);
            });
    };

    loadPresets = (categories) => {
        const { match } = this.props;
        const { params, url } = match;

        if (url !== "/") {
            this.setState({
                selectedDifficulty: params.difficulty,
                selectedCategory: categories.find(cat => cat.id === +params.categoryId),
                isSettingsBlocked: true,
            });
        }
        console.log(params);
    }

    handleChange = (e) => {
        this.setState({ playerName: e.target.value });
    }

    handleDifficultySelect = (key, event) => {
        event.preventDefault();
        const selectedDifficulty = availableDifficulties.find(dif => dif === event.target.text);
        this.setState({ selectedDifficulty });
    }

    handleCategorySelect = (key, event) => {
        event.preventDefault();
        const { categories } = this.state;
        const selectedCategory = categories.find(cat => cat.id === +event.target.id);
        this.setState({ selectedCategory });
    }

    handleSubmit = (e) => {
        const { onSettings } = this.props;
        e.preventDefault();
        onSettings(this.state);
    }

    render () {
        const {
            playerName,
            categories,
            selectedCategory,
            selectedDifficulty,
            isSettingsBlocked
        } = this.state;
        const { Toggle, Menu, Item } = Dropdown;

        return (
            <div className="border rounded">

                <Dropdown className="mb-3" onSelect={this.handleDifficultySelect}>
                    <Toggle variant="warning" id="dropdown-basic">
                        { selectedDifficulty || "Difficulty" }
                    </Toggle>
                    <Menu>
                        {
                            availableDifficulties.map(difficultyLevel => (
                                <Item
                                    disabled={isSettingsBlocked && difficultyLevel !== selectedDifficulty}
                                    key={difficultyLevel}
                                >
                                    {difficultyLevel}
                                </Item>
                            ))}
                    </Menu>
                </Dropdown>

                <Dropdown className="mb-3" onSelect={this.handleCategorySelect}>
                    <Toggle variant="warning" id="dropdown-basic">
                        {/* find the category that corresponds to the selected id,
                         get the name with .name */}
                        { (selectedCategory.name !== '' && selectedCategory.name) || "Category" }
                    </Toggle>
                    <Menu>
                        {
                            categories.map(category => (
                                <Item
                                    disabled={isSettingsBlocked && category !== selectedCategory}
                                    key={category.id}
                                    id={category.id}
                                >
                                    {category.name}
                                </Item>
                            ))
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
                <Button text="Start" onClick={this.handleSubmit} />
            </div>
        );
    }
}

export default withRouter(Settings);
