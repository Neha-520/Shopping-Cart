import React from 'react'

export default function Products(props)  {
    return (
        <div>
           <ul className="products">
             {
                 props.products.map(p =>(
                 <li key={p._id}>
                     <div className="product">
                       <a href={"# "+ p._id}>
                           <img src={p.image} alt={p.title}/>
                       <p>
                           {p.title}
                       </p>
                       </a>
                       <div className="product-price">
                         <div>
                             {`Rs. ${p.price}`}
                         </div>
                         <button onClick={() =>props.addToCart(p)} className="button primary">
                             Add To Cart
                         </button>
                       </div>
                     </div>
                 </li>
             ))}
           </ul> 
        </div>
    )
}
