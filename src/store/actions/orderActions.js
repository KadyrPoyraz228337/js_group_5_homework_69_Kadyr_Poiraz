import axios from "axios";
//
// export const orderRequest = () => ({type: ORDER_REQUEST });
// export const orderSuccess = () => ({type: ORDER_SUCCESS });
// export const orderError = () => ({type: ORDER_ERROR });

export const sendRequest = order => async dispatch => await axios.post('https://lesson69-73944.firebaseio.com/orders.json', order);