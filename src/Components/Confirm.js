import React, { PureComponent } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class Confirm extends PureComponent {
    toggleModal = () => {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        const {count, onCancel, onSubmit } = this.props
        return (
            <>
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={true}
                onHide={this.props.onCancel}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Are you sure to remove {count} tasks?
                </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button onClick={onSubmit} variant="warning">Remove</Button>
                    <Button onClick={onCancel} variant="secondary">Cancel</Button>
                </Modal.Footer>
            </Modal>
         </>
      );
    }
}