import React, {Component} from 'react';
import {InputGroup,FormControl,Button} from 'react-bootstrap';

export default  class NewTask extends Component {
    state = {
        inputValue: ''
    }
    handleChangeValue = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }
    handleOnKeyDown = (event) => {
        if(event.key === 'Enter') {
            this.sendValue()
        }
    }
    
    sendValue = () => {
        const {inputValue} = this.state;
            if(!inputValue.length){
                return;
            }

            this.props.onAdd(this.state.inputValue);
            this.setState({
                inputValue: ''
            })
    }
   

    render() {
        return(
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
                onClick={this.sendValue} 
                variant="outline-info"
            >
                Add Task
            </Button>
            </InputGroup.Append>
        </InputGroup>
        );
    }
}