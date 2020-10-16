import React, { Component } from 'react';
import C from './C'

export default class B extends Component {
    constructor(props){
        super(props);
        this.state = {
            rate: '$'
        }
        console.log('B constructor')

    }
    componentDidMount() {
        console.log('B componentDidMount')
    }
    componentWillUnmount() {
        console.log('B componentWillUnmount')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('B  componentDidUpdate')

        if(prevProps.count < 15 && this.props.count >= 15){
            this.setState=({
                rate: 'Рубл'
            })
        }
    }
    render() {
        console.log('B render')
        return(
            <div className="b">
                <button>B</button>
                <p>Count: {this.props.count} {this.state.rate}</p>
                <C />
            </div>
        )
    }
}