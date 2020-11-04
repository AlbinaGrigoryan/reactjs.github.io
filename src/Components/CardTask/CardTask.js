import React, {PureComponent}  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import {Card, Button} from 'react-bootstrap';
import styles from './CardTask.module.css';

export default  class CardTask extends PureComponent{
    state = {
        checked: false,
    }
    toggleCheckbox = () => {
        const{checked} = this.state;
        this.setState({
            checked: !this.state.checked
        })

        this.props.onCheck();
    }
    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }
    render() {
        const {data, onRemove, onEdit, disabled} = this.props; 
        const{checked} = this.state; 
        return(
            <Card style={{ width: '18rem', margin: '5%' }} className={`${checked ? styles.checked : ''}`}>
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <input
                        type='checkbox'
                        className={`${checked ? styles.checked : ''}`}
                        onClick={this.toggleCheckbox}
                    />
                    <Card.Text>
                        {data.description}
                    </Card.Text>
                    <Button variant='info' className='m-1' onClick={onEdit} disabled={disabled}>
                        <FontAwesomeIcon icon={faEdit}/>
                    </Button>
                    <Button variant='danger'  className='m-1' onClick={this.props.onRemove(data.id)} disabled={disabled}>
                        <FontAwesomeIcon icon={faTrash}/>
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}