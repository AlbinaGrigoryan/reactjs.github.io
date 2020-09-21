import React from 'react';
//import Header from './Components/Header';
//import Content from './Components/Content';
//import Class from './Components/Class';
// import Product from './Components/Product';
import Input from './Components/Input';
import ToDo from './Components/ToDo';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {
    return(
        <div>
            <Input />
            <ToDo />
            {/*<Product name="bananas" price="1$" description="Fresh bananas from Ecuador" /> 
            <Product name="bananas" price="5$" description="Fresh bananas from Ecuador" /> */}     
        </div>
    );
}