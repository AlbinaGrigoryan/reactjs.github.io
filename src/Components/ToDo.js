import React, {Component} from 'react';
import Task from './Task';

//   Ստեղծել փոքրիկ ToDo list, այսինքն պետք է հնարավորություն ունենանք ավելացնելու task-եր, որոնք անմիջապես
//   կերևան էջում։ Դրա համար ստեղծել ToDo անունով class component, որի մեջ` input և button էլեմենտներ։ Ստեղծել 
//   Task անունով function component, կիրառել այն ToDo-ի մեջ։ button-ի վրա սեղմելուց պետք է վերցնել Input-ի արժեքը և
//   ավելացնել state-ում նախօրոք ստեղծված tasks զանգվածի մեջ։ tasks զանգվածի հիման վրա render-ում ավելացնել Task 
//   կոմպոնոնտներ։ Ամեն մի Task կոմպոնենտին տալ ունիկալ key հատկություն, ոինչպես նաև վերջինիս փոխանցել տեքստը, 
//   որը պետք է ցուցադրվի էջում։


export default class ToDo extends Component{
    state = {
        inputValue: '',
        tasks: []
    }
    handleChangeValue = (event) => {
        this.setState({
            inputValue: event.target.value 
        })
    }
    addValue = () => {
        let{inputValue, tasks} = this.state;
        tasks.push(inputValue);
        this.setState({
            tasks
        })
    }
    render() {
        let taskText = this.state.tasks.map((task, index) => <div key ={index}>{task}</div>);
       
        return(
            <div>
                <input onChange={this.handleChangeValue}/>
                <button 
                    onClick={this.addValue}>
                    Add Task
                </button>
                <Task data={taskText}/>
            </div>
        )
    }
}