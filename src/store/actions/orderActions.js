import axios from "axios";

export const sendRequest = order => async dispatch => await axios.post('https://lesson69-73944.firebaseio.com/orders.json', order);