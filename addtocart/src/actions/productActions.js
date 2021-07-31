import Products from "../components/Products";
import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "../types";

//get list of all products
//accept no parameters because we are not filtering products
export const fetchProducts = () => async (dispatch) =>{

    //dispatching an action
  const res = await fetch("/api/products"); //data from our server
  const data = await res.json();
  //dispatching the products as action

  dispatch({
      type: FETCH_PRODUCTS,
      payload : data,
  })
}

//action is an object
//since we are using thunk, we return another function having dispatch param
export const filterProducts = (products,size) => (dispatch) =>{
  dispatch({
    type:FILTER_PRODUCTS_BY_SIZE,
    payload:{
      size: size,
      items: size === "" ? products:
      products.filter(x => x.availableSizes.indexOf(size) >=0),
    },
  })
}
export const sortProducts = (filteredProducts, sort) = (dispatch) =>{
  const sortedProducts = filteredProducts.slice();
  if(sort === ""){
    sortProducts.sort((a,b) =>(a._id > b._id ?1 : -1));
  }
  else{
    sortProducts.sort((a,b) =>(
      sort === "lowestprice" ? a.price >b.price ?1 :-1
      :
      a.price > b.price ? -1 :1
    ));
  }
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload:{
      sort:sort,
      items: sortedProducts 
    },
  })
}