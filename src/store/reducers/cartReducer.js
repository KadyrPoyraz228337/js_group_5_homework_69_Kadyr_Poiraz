import {ADD_TO_CART, DELETE_PRODUCT_AT_THA_CART, RESET_CART_STORE} from "../actions/actionsTypes";

const initialState = null;

const cartReducer = (state = initialState , action) => {
  switch (action.type) {
      case ADD_TO_CART:
          if(!state) {
              return {
                  ...state,
                  elements: {
                      [action.name]: {price: action.price, total: 1}
                  },
                  total: action.price
              };
          } else if (state.elements[action.name]) {
              return {
                  ...state,
                  elements: {
                      ...state.elements,
                      [action.name]: {...state[action.name], price: state.elements[action.name].price + action.price, total: state.elements[action.name].total + 1 }
                  },
                  total: state.total + action.price
              }
          } else {
              if(Object.keys(state.elements).length > 0) {
                  return {
                      ...state,
                      elements: {
                          ...state.elements,
                          [action.name]: {price: action.price, total: 1}
                      },
                      total: state.total + action.price
                  };
              }
          }
          return state;
      case DELETE_PRODUCT_AT_THA_CART:
          if(state.elements[action.name].total === 1) {
              const copyState = {...state};
              copyState.total = copyState.total - copyState.elements[action.name].price;
              delete copyState.elements[action.name];
              if(Object.keys(copyState.elements).length === 0) {
                  return null
              }
              return copyState
          } else {
              const copyState = {...state};
                const peice = copyState.elements[action.name].price / copyState.elements[action.name].total;
              copyState.elements[action.name].price = copyState.elements[action.name].price - peice;
              copyState.elements[action.name].total = copyState.elements[action.name].total - 1;
              copyState.total = copyState.total - peice;
              return copyState
          }
      case RESET_CART_STORE:
          return null;
      default: return state
  }
};

export default cartReducer;