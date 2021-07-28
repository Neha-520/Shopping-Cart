
import React, { useState } from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json"
import Cart from "./components/Cart";


function App() {

  const [state, setState] = useState({
    products: data.products,
    cartItems:[],
    size: "",
    sort: "",
  });


  const addToCart = (product) => {
    const cartItem = state.cartItems.slice();
    let alreadyInCart = false
    cartItem.forEach(item => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    })
    if (!alreadyInCart) {
      cartItem.push({ count: 1 });
    }
   setState({...state,cartItems:cartItem});
  };

  const filterProducts = (e) => {

    console.log(e.target.value);
    if (e.target.value === "") {
      setState({ ...state, [e.target.name]: e.target.value });
    }
    else {
      setState({
        ...state,
        [e.target.name]:
          data.products.filter((p) => p.availableSizes.indexOf(e.target.value) >= 0),
      });
    }
    console.log(state);
  }
  const sortProducts = (e) => {

    setState({
      ...state, [e.target.name]: e.target.value
    });
  }

  return (
    <div className="grid-container">
      <header>
        <a href="/"> React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={state.products.length}
              size={state.size}
              sort={state.sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />
            <Products products={state.products} addToCart={()=>addToCart(state.products)} />
          </div>
          <div className="sidebar">
            <Cart cartItems={state.cartItems} />
          </div>
        </div>
      </main>
      <footer>
        Made with peace
      </footer>
    </div>
  );
}

export default App;
