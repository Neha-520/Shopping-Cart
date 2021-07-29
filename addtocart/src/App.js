
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

removeFromCart =(product) =>{
  const cartItems = this.state.cartItems.slice();
  this.setState({
  cartItems:cartItems.filter(x => x._id !== product._id),
  });
}

 addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    })
    if (!alreadyInCart) {
      cartItems.push({...product,count: 1 });
    }
   this.setState({cartItems:cartItems});
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
   const sort=e.target.value;
this.setState((state)=>({
  sort:sort,
   products:state.products.slice().sort((a,b)=>(
     sort === "lowest" ?
     a.price > b.price ? 1 : -1
     : sort === "highest" ?
     a.price < b.price? 1 : -1
     : a._id > b._id ? 1:-1
   )),
  }));
  };
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
            <Products products={this.state.products} addToCart={this.addToCart} />
          </div>
          <div className="sidebar">
            <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}/>
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