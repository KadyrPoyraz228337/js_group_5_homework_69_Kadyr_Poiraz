import {DELETE_PRODUCT_AT_THA_CART, RESET_CART_STORE} from "./actionsTypes";

export const deleteProductAtTheCart = name => ({type: DELETE_PRODUCT_AT_THA_CART, name});
export const resetCartStore = () => ({type: RESET_CART_STORE});