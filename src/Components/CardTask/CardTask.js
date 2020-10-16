import React, {PureComponent}  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {Card, Button, Form} from 'react-bootstrap';
import styles from './CardTask.module.css';

export default  class CardTask extends PureComponent{
    state = {
        checked: false
    }
    toggleCheckbox = () => {
        const{checked} = this.state;
        this.setSate =({
            checked: !this.state.checked
        })
    }
    render() {
        const {data} = this.props; 
        const{checked} = this.state; 
        return(
            <Card style={{ width: '18rem', margin: '5%' }} className={`${checked ? styles.checked : ''}`}>
                <Card.Body>
                    <input
                        type='checkbox'
                        className={`${checked ? styles.checked : ''}`}
                        onClick={this.toggleCheckbox}
                    />
                    <Card.Text>
                        {data.text}
                    </Card.Text>
                    <Button variant='danger'  onClick={this.props.onRemove(data.id)}>
                        <FontAwesomeIcon icon={faTrash}/>
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}