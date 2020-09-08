import React,{Component} from 'react';

export default class Name extends Component{
   constructor(props) {
       super(props);
       this.name = this.props.name;
   }
   render() {
    return(
        <>
        <p>Name: {this.props.name}</p>
        </>
    )
}
}