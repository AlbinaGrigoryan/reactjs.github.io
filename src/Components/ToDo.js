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
    handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            this.addValue()
        }
    }
    addValue = () => {
        let{inputValue} = this.state;
        let tasks = [...this.state.tasks];
        tasks.push(inputValue);
       
        this.setState({
            tasks,
            inputValue: ''
        })
    }
    render() {
        let addTaskArray = this.state.tasks.map((task, index) => <Task key ={index} data={task} />);
       
        return(
            <div>
                <input onChange={this.handleChangeValue} onKeyDown={this.handleKeyDown} value={this.state.inputValue}/>
                <button 
                    onClick={this.addValue}>
                    Add Task
                </button>
                {addTaskArray}
            </div>
        )
    }
}