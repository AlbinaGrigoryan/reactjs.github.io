import React from 'react';
import ToDo from './Components/ToDo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './Components/Btodo'



export default function App() {
    return(
        <div>
            <Todo />
            {/*<Product name="bananas" price="1$" description="Fresh bananas from Ecuador" /> 
            <Product name="bananas" price="5$" description="Fresh bananas from Ecuador" /> */}     
        </div>
    );
}