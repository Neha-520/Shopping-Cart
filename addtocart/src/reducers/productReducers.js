import { FETCH_PRODUCTS } from "../types";

export const productsReducer = (state ={}, action) =>{
    switch(action.type){
        case FETCH_PRODUCTS:
            return {items : action.payload};
         default:
             return state;   
    }
};
//when we get data from action we update the data in redux store