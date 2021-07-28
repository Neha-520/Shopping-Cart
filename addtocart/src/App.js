
import React  from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json"
import Cart from "./components/Cart";


class App extends React.Component{

  constructor(){
    super();
    this.state={
      products: data.products,
    cartItems:[],
    size: "",
    sort: "",
    };
  }



 addToCart = (product) => {
    const cartItem = this.state.cartItems.slice();
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
   this.setState({cartItems:cartItem});
  };

 filterProducts = (e) => {

    console.log(e.target.value);
    if (e.target.value === "") {
      this.setState({ size: e.target.value,product:data.products });
    }
    else {
      this.setState({
        size: e.target.value,
         products: data.products.filter((p) => p.availableSizes.indexOf(e.target.value) >= 0),
      });
    }
  }
 sortProducts = (e) => {

    this.setState({
     sort: e.target.value
    });
  }
  render(){

  return (
    <div className="grid-container">
      <header>
        <a href="/"> React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={this.state.products.length}
              size={this.state.size}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}
            />
            <Products products={this.state.products} addToCart={()=>this.addToCart(this.state.products)} />
          </div>
          <div className="sidebar">
            <Cart cartItems={this.state.cartItems} />
          </div>
        </div>
      </main>
      <footer>
        Made with peace
      </footer>
    </div>
  );
}
}
export default App;