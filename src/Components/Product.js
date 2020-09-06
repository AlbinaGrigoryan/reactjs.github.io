import React from 'react';
import Name from './Name';
import Price from './Price';
import Description from './Description';

export default class Product {
   render() {
       return(
           <div>
               <Name />,
               <Price />,
               <Description />
           </div>
       )
   };
}