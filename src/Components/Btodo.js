import React, {Component} from 'react';
import {Container,Row,Col,InputGroup,FormControl,Button} from 'react-bootstrap';
import idGenerator from '../helpers/idGenerator';


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
        tasks.push(inputValue);
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
        const taskComponent= this.state.tasks.map((task, index) => 
        <Col key={idGenerator()}>{task}</Col>
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