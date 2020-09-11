import React,{Component} from 'react';

export default class Name extends Component{
   render() {
    return(
        <div>
        <p>Name: {this.props.name}</p>
        </div>
    )
}
}