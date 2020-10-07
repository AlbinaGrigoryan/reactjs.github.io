import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {Card, Button, Form} from 'react-bootstrap';

export default  function CardTask(props) {
    const {data} = props;  
        return(
            <Card style={{ width: '18rem', margin: '5%' }}>
            <Card.Body>
                <Card.Title><Form.Check type="checkbox"/>Task</Card.Title>
                <Card.Text>
                    {data.text}
                </Card.Text>
                <Button variant='danger'  onClick={props.onRemove(data.id)}>
                    <FontAwesomeIcon icon={faTrash}/>
                </Button>
            </Card.Body>
        </Card>
        );
}