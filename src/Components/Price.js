import React,{Component} from 'react';

export default class Price extends Component{
   constructor(props) {
       super(props);
       this.price = this.props.price;
   }
   render() {
       return(
           <>
           <p>Price: {this.props.price}</p>
           </>
       )
   }
}