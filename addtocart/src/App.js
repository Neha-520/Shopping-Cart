
import React, { useState } from "react";
import data from "./data.json"


function App() {

  const [state, setState] = useState({
    products: data.products,
    size: "",
    sort: "",
  });

  return (
    <div className="grid-container">
      <header>
        <a href="/"> React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            Products
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
