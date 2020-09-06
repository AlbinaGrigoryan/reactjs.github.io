import React, {Component} from 'react';

export default class User extends Component{
    constructor(weight, height){
        super();
        this.weight = weight;
        this.height = height;
    };

    getIndexMass() {
        return this.weight;
    };
    
    getBodyMass = function() {
        return this.height;
    }
    render() {
        return(
            ''
        )
    }
}

let user = new User(85, 45);
console.log(user);
console.log(user.getBodyMass())