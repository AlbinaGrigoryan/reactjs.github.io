import React from 'react';

export default function Name() {
    let name = prompt('Fill Your name please')
    return(
        <p>Your name is {name}</p>
    )
}

let user = {
    name: 'John',
    getFullName: getName
}

function getName(age, numbers) {
    return this.name + ' ' + age + " " + numbers;
}
console.log(getName.call(user,15));

let arr = [2,6,8,125]
console.log(getName.apply(user, [55, arr]))
let newFunc = getName.bind(user);
console.log(newFunc());

