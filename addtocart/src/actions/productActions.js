import { FETCH_PRODUCTS } from "../types";

//get list of all products
//accept no parameters because we are not filtering products
export const fetchProducts = () => async (dispatch) =>{

    //dispatching an action
  const res = await fetch("/api/products"); //data from our server
  //dispatching the products as action
  dispatch({
      type: FETCH_PRODUCTS,
      payload : res.data,
  })
}