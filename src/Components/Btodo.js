import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NewTask from './NewTask';
import CardTask from './CardTask/CardTask';
import Confirm from './Confirm';
import Modal from './Modal';


export default class Btodo extends Component {
    state = {
        inputValue: '',
        tasks: [],
        checkedTasks: new Set(),
        showConfirm: false,
        editTask: null,
        openNewTaskModal: false
    }

    componentDidMount() {
        fetch('http://localhost:3001/task', {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
            }
        })
            .then((response) => response.json())
            .then((tasks) => {
                if (tasks.error) {
                    throw tasks.error;
                }

                this.setState({
                    tasks
                });
            })
            .catch((err) => {
                console.log('err', err);
            });
    }
    addTask = (inputValue) => {
        const data = {
            title: inputValue
        };

        fetch('http://localhost:3001/task', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": 'application/json',
            }
        })
            .then((response) => response.json())
            .then((task) => {
                if (task.error) {
                    throw task.error;
                }

                this.setState({
                    tasks: [task, ...this.state.tasks],
                    openNewTaskModal: false
                });
            })
            .catch((err) => {
                console.log('err', err);
            });
    };

    onRemoveTask = (taskid) => () => {
        const newTasks = this.state.tasks.filter(task => task.id !== taskid);

        this.setState({
            tasks: newTasks
        })
    }
    handleCheckedTasks = (taskid) => () => {
        const checkedTasks = new Set(this.state.checkedTasks);
        if (checkedTasks.has(taskid)) {
            checkedTasks.delete(taskid)
        } else {
            checkedTasks.add(taskid)
        }
        this.setState({ checkedTasks })
    }
    onRemoveCheckedTask = () => {
        const checkedTasks = new Set(this.state.checkedTasks);
        let tasks = [...this.state.tasks]

        checkedTasks.forEach(taskid => {
            tasks = tasks.filter(task => task.id !== taskid)
        });

        checkedTasks.clear()
        this.setState({
            tasks,
            checkedTasks,
            showConfirm: false
        })
    }

    toggleConfirm = () => {
        this.setState({
            showConfirm: !this.state.showConfirm
        })
    }
    handleEdit = (task) => () => {
        this.setState({ editTask: task })
    }
    handleSave = (taskId, value) => {
        const tasks = [...this.state.tasks];

        const taskIndex = tasks.findIndex(task => task._id === taskId);

        tasks[taskIndex] = {
            ...tasks[taskIndex],
            text: value
        }
        this.setState({
            tasks: tasks,
            editTask: null
        })
    }
    toggleNewTaskModal = () => {
        this.setState({
            openNewTaskModal: !this.state.openNewTaskModal
        })
    }
    render() {
        const { checkedTasks, showConfirm, editTask } = this.state;
        const taskComponent = this.state.tasks.map((task) =>
            <Col key={task._id}>
                <CardTask
                    data={task}
                    onRemove={this.onRemoveTask}
                    onCheck={this.handleCheckedTasks(task._id)}
                    onEdit={this.handleEdit(task)}
                    disabled={!!checkedTasks.size}
                />
            </Col>
        )
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Button
                                className='m-3'
                                variant="primary"
                                disabled={checkedTasks.size}
                                onClick={this.toggleNewTaskModal}>
                                Add new task
                        </Button>
                        </Col>
                    </Row>
                    <Row>
                        {taskComponent}
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md={{ span: 4, offset: 5 }}>
                            <Button
                                variant="danger"
                                disabled={checkedTasks.size ? false : true}
                                onClick={this.toggleConfirm}>
                                Remove checked tasks
                        </Button>
                        </Col>
                    </Row>
                </Container>
                {showConfirm &&
                    <Confirm
                        count={checkedTasks.size}
                        onSubmit={this.onRemoveCheckedTask}
                        onCancel={this.toggleConfirm}
                    />}
                {editTask &&
                    <Modal
                        value={editTask}
                        onSave={this.handleSave}
                        onCancel={this.handleEdit(null)}
                    />}
                {
                    this.state.openNewTaskModal &&
                    <NewTask
                        onAdd={this.addTask}
                        onCancel={this.toggleNewTaskModal}
                    />
                }
            </>
        )
    }
}

