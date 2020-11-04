import React, { PureComponent } from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class TaskModal extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: props.value.text
        }
    }

    toggleModal = () => {
        this.setState({
            open: !this.state.open
        })
    }
    handleChangeValue  = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }
    handleOnKeyDown = (event) => {
        if(event.key === 'Enter'){
            event.preventDefault();
            this.handleSave()
        }
    }
    handleSave =()=> {
        const {inputValue} = this.state;
        if(inputValue) {
            const taskId = this.props.value.id;
            this.props.onSave(taskId, inputValue)
        }
    }
   
    render() {
        const { onCancel} = this.props
        return (
            <>
                <Modal
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={true}
                    onHide={this.props.onCancel}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Task
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormControl
                            placeholder="Typing..."
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            onChange={this.handleChangeValue}
                            onKeyDown={this.handleOnKeyDown}
                            value={this.state.inputValue}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleSave} variant="success">Save</Button>
                        <Button onClick={onCancel} variant="secondary">Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
TaskModal.propTypes = {
    value: PropTypes.object,
    onSave: PropTypes.func,
    onCancel: PropTypes.func
}