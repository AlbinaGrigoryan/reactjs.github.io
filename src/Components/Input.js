import React, {Component} from 'react';

export default class Input extends Component {
    state = {
        value : '',
        clickValue : '',
        showText: true,
        products: [
            {
                name: 'Բաճկոն',
                color: 'Մոխրագույն',
                price: '23000 դրամ',
                icon: '🥋',
                id: 1
            },
            {
                name: 'Կոշիկ',
                color: 'Սև',
                price: '15000 դրամ',
                icon: '👠',
                id: 2
            },
            {
                name: 'Ժամացույց',
                color: 'Ոսկեգույն',
                price: '38000 դրամ',
                icon: '⌚',
                id: 3
            }
        ]
    };
    onChange = (event) => {
        this.setState({ 
            value : event.target.value 
        });
    };
    onClick = () => {
        let{value} = this.state;
        this.setState({
            value : '',
            clickValue : value
        })
    }
    hideText = () => {
        this.setState({
            showText : !this.state.showText
        })
    }
    render() {
        let {showText} = this.state;
        let products = this.state.products.map((product, index)=>{
            return(
                <div key={product.id}>
                    <p>{product.name}  {product.color}  {product.price} {product.icon}</p>
                </div>
            )
        });
        return(
            <div>
                <input type="text" onChange = {this.onChange} value={this.state.value}/>
                <button onClick = {this.onClick}>Add</button>
                <p>{this.state.clickValue}</p>

                <button onClick = {this.hideText}>
                    {showText ? 'Hide' : 'Show'}
                </button>
                 {showText &&  <p>You are welcome</p>}
                 {products}
                </div>
        )
    }
}
