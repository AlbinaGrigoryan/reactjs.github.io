import React, {Component} from 'react';
import {Container,Row,Col,Button, Card} from 'react-bootstrap';
import idGenerator from '../helpers/idGenerator';
import NewTask from './NewTask';
import CardTask from './CardTask/CardTask'


export default class Btodo extends Component{
    state = {
        inputValue: '',
        tasks: []
    }
  
    addTask = (inputValue) => {
        const tasks = [...this.state.tasks];
        const newTask = {
            id: idGenerator(),
            text: inputValue
        };

        tasks.push(newTask);
        this.setState({
            inputValue: '',
            tasks
        })
    }
   
    onRemoveTask = (taskid) => () => {
        const newTasks = this.state.tasks.filter(task => task.id !== taskid);

        this.setState({
            tasks: newTasks
        })
    }
    render() {
        const taskComponent= this.state.tasks.map((task) => 
            <Col key={task.id}>
                <CardTask 
                    data={task}
                    onRemove = {this.onRemoveTask}
                />
            </Col>
        )
        return(
            <Container fluid>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                       <NewTask onAdd = {this.addTask}/>
                    </Col>
                </Row>
                <Row>
                    {taskComponent}
                </Row>
            </Container>
        )
    }
}

