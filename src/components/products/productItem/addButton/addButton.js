import React from 'react';
import './addButton.css';
import {addToCart} from "../../../../store/actions/products";
import {connect} from "react-redux";

const AddButton = (props) => {
    return (
        <button className='text-left ml-auto mr-4 p-1 bg-light border d-flex align-items-center justify-content-center rounded' style={{width: '30%'}} onClick={() => props.addToCart(props.name, props.price)}>
            <img src="https://img.icons8.com/pastel-glyph/2x/shopping-cart--v2.png" alt="cart" className='w-25 mr-2'/>
            Добавить в карзину
        </button>
    );
};

const mapDispatchToProps = dispatch => ({
    addToCart: (productName, productPrice) => dispatch(addToCart(productName, productPrice))
});

export default connect(null, mapDispatchToProps)(AddButton);