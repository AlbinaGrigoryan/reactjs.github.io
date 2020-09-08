import React,{Component} from 'react';

export default class Description extends Component{
    constructor(props) {
        super(props);
        this.description = this.props.description;
    }
    render() {
        return(
            <>
            <p>Description: {this.props.description}</p>
            </>
        )
    }
 }