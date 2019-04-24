import React, { Fragment }from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


const Settings = () => {
    return (
        <div className="border p-4 rounded">
            <Fragment>
                <Dropdown className="mb-3">
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                        Difficulty
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Easy</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Medium</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Hard</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Fragment>
            <Fragment>
                <Dropdown className="mb-3">
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                        Category
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">General Knowledge</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Entertainment: Television</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Science and Nature</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Sports</Dropdown.Item>
                        <Dropdown.Item href="#/action-5">Geography</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Fragment>
            <Fragment>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Player Name"
                        aria-label="Playername"
                    />
                </InputGroup>
            </Fragment>
        </div>
    );
};

export default Settings;
