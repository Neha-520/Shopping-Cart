import React from 'react'

export default function Cart ({cartItems,removeFromCart})
{
 console.log(cartItems);
    return (
        <>
        <div>
           {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} in the cart{" "}
          </div>
        )}          
        </div>
       <div>
           <div className="cart">
               <ul className="cart-items">
               {
                   cartItems.map(i=>{
                       <li key={i._id}>
                           <div>
                             <img src={i.image} alt={i.title}/>
                           </div>
                           <div>
                               {i.title}
                           </div>
                           <button onClick={()=>removeFromCart(i)}>Remove</button>
                       </li>
                   })
               }

               </ul>
           </div>
       </div>

       </>
    )
}
