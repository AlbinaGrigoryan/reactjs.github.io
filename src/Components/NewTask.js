import React, { Component } from 'react';
import { FormControl, Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class NewTask extends Component {
    state = {
        title: '',
        description: '',
        date: ''
    }
    handleChangeValue = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleOnKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.handleSave()
        }
    }
    handleSave = () => {
        const { title } = this.state;
        if (title) {
            this.props.onAdd(title)
        }
    }


    render() {
        return (
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={true}
                onHide={this.props.onCancel}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add new Task
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl
                        placeholder="Typing..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={this.handleChangeValue}
                        onKeyDown={this.handleOnKeyDown}
                        value={this.state.title}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleSave} variant="success">Add</Button>
                    <Button onClick={this.props.onCancel} variant="secondary">Cancel</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

NewTask.propTypes = {
    disabled: PropTypes.bool,
    onAdd: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
}