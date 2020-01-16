import {ADD_TO_CART, FETCH_PRODUCTS} from "./actionsTypes";
import axios from "axios";

export const fetchProducts = data => ({ type: FETCH_PRODUCTS, data });

export const getProducts = () => async dispatch => {
    const resp = await axios('https://lesson69-73944.firebaseio.com/products.json');
    dispatch(fetchProducts(resp.data));
};

export const addToCart = (name, price) => {
    return { type: ADD_TO_CART, name, price }
};