import React from 'react';
import './View.css';

const View = ({products,deleteProduct,getEditedObj, detailProduct}) => {
    
    return products.map((product,id)=>(
        
        <div key={product.id}>
            <h4>{product.title}</h4>
            <div>
                <img src={product.image} alt={product.title} className='productImage'/>
            </div>
            <div>${product.price}</div>
            <button onClick={()=>deleteProduct(product.id)}>Delete</button>
            <button onClick={()=>getEditedObj(product.id)}>Edit</button>
            <button onClick={() => detailProduct(product.id)}>Details</button>
        </div>
))
}

export default View;