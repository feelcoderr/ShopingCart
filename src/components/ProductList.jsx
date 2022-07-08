import React from 'react';
import Product from './Product.jsx'

export default function ProductList(props) {
  
  return (
    Object.keys(props.products).length > 0 ?
    props.products.map((product,i)=>{
        return <Product 
        product={product} 
        key={i} 
        incrementQuantity={props.incrementQuantity} 
        decrementQuantity={props.decrementQuantity} 
        removeProduct={props.removeProduct}
        index={i}/>
    }) : <h1>Please Add Your Favorite Products in Your ShopingCart😊</h1>
  )
}
