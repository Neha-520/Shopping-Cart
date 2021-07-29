import React from 'react'

export default function Cart (props)
{
  console.log(props.cartItems);
    return (
        <>
        <div>
           {props.cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {props.cartItems.length} in the cart{" "}
          </div>
        )}          
        </div>
       <div>
           <div className="cart">
               <ul className="cart-items">
               {
                   props.cartItems.map(i=>(
                       <li key={i._id}>
                           <div>
                             <img src={i.image} alt={i.title}/>
                           </div>
                           
                           <div>
                           <div>{i.title}</div>
                           <div className="right"> 
                           {`${i.count} x Rs${i.price} `}
                           <button className="button" onClick={()=>props.removeFromCart(i)}>Remove</button>
                           </div>
                           </div>
                       </li>
                   ))
               }

               </ul>
           </div>
           {props.cartItems.length !== 0 && (
           <div className="cart">
            <div className="total">
             Total:{` Rs `}
               {props.cartItems.reduce((a,c) => a + c.price * c.count,0)}
             </div> 
             <button className="button primary"> Proceed</button>  
           </div>
           )}
       </div>

       </>
    )
}
