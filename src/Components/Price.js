import React,{Component} from 'react';

export default class Price extends Component{
    constructor(props){
        super(props);

        this.state = {
            price: this.props.price,
            dram: 478
        }
    }
    changeCurrency = () => {
        let price = this.state.price; 
        let sign = price[price.length - 1];
        if(sign === '$'){
            price = parseFloat(price) * this.state.dram + 'դ';
        } else if(sign === 'դ') {
            price = parseFloat(price) / this.state.dram + '$';
        }

        this.setState({
            price: price
        });
    };

   render() {
       return(
           <div>
           <p>
            Price: {this.state.price}
           <button onClick = {this.changeCurrency}>
               Change the currency
           </button>
           </p>
           </div>
       )
   };
}