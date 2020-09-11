import React,{Component} from 'react';

export default class Description extends Component{
    render() {
        return(
            <div>
            <p>Description: {this.props.description}</p>
            </div>
        )
    }
 }