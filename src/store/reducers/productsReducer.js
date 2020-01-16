import {FETCH_PRODUCTS} from "../actions/actionsTypes";

const initialState = null;

const productsReducer = (state = initialState , action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        products: action.data
      };
    default: return state;
  }
};

export default  productsReducer;