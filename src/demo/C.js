import React, { Component } from 'react';

export default class C extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'John'
        }
        console.log('C constructor')
    }
    componentDidMount() {
        console.log('C componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.name === nextState.name){
            return false
        };
        return true;
    }

    componentDidUpdate(prevProps, prevState){
        console.log('C componentDidUpdate');
    }

    render() {
        console.log('C render')
        return(
            <div className="c">
                <button>C</button>
            </div>
        )
    }
}