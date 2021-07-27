
import React, { useState } from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json"


function App() {

  const [state, setState] = useState({
    products: data.products,
    size: "",
    sort: "",
  });

  const filterProducts = (e) => {
    if (e.target.value === "") {
      setState({ ...state,[e.target.name]: e.target.value, product: data.products });
    }
    else {
      setState({
        ...state, [e.target.name]: e.target.value,
        [e.target.name]: data.products.filter((p) => p.availableSizes.indexOf(e.target.value) >= 0),
      });
    }
  }
  const sortProducts = (e) => {
    // setState({...state,[e.target.name]:e.target.value});
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
            <Products products={state.products} />
          </div>
          <div className="sidebar">
            Cart Items
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
