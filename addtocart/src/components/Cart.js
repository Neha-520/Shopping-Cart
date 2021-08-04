import React, { useState } from 'react'
import { connect } from 'react-redux'
import Modal from "react-modal"
import Zoom from 'react-reveal/Zoom'
import { removeFromCart } from '../actions/cartActions'
import {createOrder,clearOrder} from '../actions/orderActions'

function Cart(props) {
  // console.log(props.cartItems);
  const [state, setState] = useState({
    name:"",
    email:"",
    address:"",
    showCheckout: false,
  })

  const handleInput =(e)=>{
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const createOrder =(e)=>{
    e.preventDefault();
    const order={
      name:state.name,
      email:state.email,
      address:state.address,
      cartItems: props.cartItems,
      total: props.cartItems.reduce((a,c) => a + c.price * c.count,0),
    };
    props.createOrder(order);
  }

  const closeModal = () => {
    props.clearOrder();
  };

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
        {
          props.order && 
          <Modal isOpen ={true}
          onRequestClose ={closeModal}
          >
            <Zoom>
              <button className =" close-modal" onClick={closeModal}>x</button>
              <div className="order-details">
                <h3 className="success-message">Your order has been placed.</h3>
                <h2>Order {props.order._id}</h2>
                <ul>
                  <li>
                    <div>Name:</div>
                    <div>{props.order.name}</div>
                  </li>
                  <li>
                    <div>Email:</div>
                    <div>{props.order.email}</div>
                  </li>
                  <li>
                    <div>Address:</div>
                    <div>{props.order.address}</div>
                  </li>
                  <li>
                    <div>Total:</div>
                    <div>{`Rs. ${props.order.total}`}</div>
                  </li>
                  <li>
                    <div>Cart Items:</div>
                    <div>
                    {props.order.cartItems.map((x) =>(
                      <div>
                       {x.count} {" x "} {x.title}
                      </div>
                    ))}
                    </div>
                  </li>
                </ul>
              </div>
            </Zoom>
          </Modal>
        }
      </div>
      <div>
        <div className="cart">
          <ul className="cart-items">
            {
              props.cartItems.map(i => (
                <li key={i._id}>
                  <div>
                    <img src={i.image} alt={i.title} />
                  </div>

                  <div>
                    <div>{i.title}</div>
                    <div className="right">
                      {`${i.count} x Rs${i.price} `}
                      <button className="button" onClick={() => props.removeFromCart(i)}>Remove</button>
                    </div>
                  </div>
                </li>
              ))
            }

          </ul>
        </div>
        {props.cartItems.length !== 0 && (
          <div>
          <div className="cart">
            <div className="total">
              Total:{` Rs `}
              {props.cartItems.reduce((a, c) => a + c.price * c.count, 0)}
            </div>
            <button onClick={() => { setState({...state,showCheckout: true }) }} className="button primary"> Proceed</button>
          </div>
            {state.showCheckout && (
          <div className="cart">
            <form onSubmit={createOrder}>
              <ul className="form-container">
                <li>
                  <label>Email</label>
                  <input name="email" type="email" required onChange={handleInput}></input>
                </li>
                <li>
                  <label>Name</label>
                  <input name="name" type="text" required onChange={handleInput}></input>
                </li>
                <li>
                  <label>Address</label>
                  <input  name="address"type="text" required onChange={handleInput}></input>
                </li>
                <li>
                  <button className="button primary" type="submit">Checkout</button>
                </li>
              </ul>
            </form>
          </div>
        )} 
        </div>
           )}
      </div>

    </>
  )
}

export default connect((state) =>({
  order: state.order.order,
  cartItems: state.cart.cartItems,
}),
{removeFromCart,createOrder,clearOrder})
(Cart);