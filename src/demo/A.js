import React, { Component } from 'react';
import B from './B'

export default class A extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: true,
            count: 10
        }
        console.log('A constructor')
    }

    componentDidMount() {
        console.log('A componentDidMount')
    }

    componentDidUpdate() {
        console.log('A componentDidUpdate')
    }

    deleteB = () => {
        this.setState({
            show: !this.state.show
        })
    }
    changeCount = () => {
        this.setState({
            count: this.state.count+1
        })
    }
    render() {
        console.log('A render')
        return(
                <div className="a">
                    <button onClick={this.deleteB}>A</button>
                    <button onClick={this.changeCount}>changeCount</button>
                    { this.state.show && <B count={this.state.count}/>}
                </div>
        )
    }
}