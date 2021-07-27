
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
 
  const filterProducts =(size)=>{

  }
  const sortProducts = (sort)=>{
    
  }

  return (
    <div className="grid-container">
      <header>
        <a href="/"> React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
          <Filter count={state.products.length} size={state.size} sort={state.sort}
            filterProducts={filterProducts} sortProducts={sortProducts}
          />
           <Products products={state.products}/>
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
