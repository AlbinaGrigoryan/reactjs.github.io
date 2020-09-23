import React, {Component} from 'react';
import {Container,Row,Col,InputGroup,FormControl,Button,Card,Form} from 'react-bootstrap';
import idGenerator from '../helpers/idGenerator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export default class Todo extends Component{
    state = {
        inputValue: '',
        tasks: []
    }
    handleChangeValue = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }
    handleClick = () => {
        const{inputValue} = this.state;

        const tasks = [...this.state.tasks];
        const newTask = {
            id: idGenerator(),
            text: inputValue
        };

        tasks.push(newTask);
        if(inputValue.length === 0){
            tasks.pop(inputValue);
        }

        this.setState({
            inputValue: '',
            tasks
        })
    }
    handleOnKeyDown = (event) => {
        if(event.key === 'Enter') {
           this.handleClick()
        }
    }
    render() {
        const taskComponent= this.state.tasks.map((task) => 
        <Card style={{ width: '18rem', margin: '5%' }}  key={task.id}>
            <Card.Body>
                <Card.Title><Form.Check type="checkbox"/>Task</Card.Title>
                <Card.Text>
                    {task.text}
                </Card.Text>
                <Button variant='danger'>
                <    FontAwesomeIcon icon={faTrash }/>
                </Button>
            </Card.Body>
        </Card>
        )
        return(
            <Container fluid>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <InputGroup className="m-3">
                            <FormControl
                                placeholder="Typing..."
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                onChange={this.handleChangeValue}
                                onKeyDown={this.handleOnKeyDown}
                                value={this.state.inputValue}
                            />
                            <InputGroup.Append>
                            <Button 
                                onClick={this.handleClick} 
                                variant="outline-info"
                            >
                                Add Task
                            </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    {taskComponent}
                </Row>
            </Container>
        )
    }
}