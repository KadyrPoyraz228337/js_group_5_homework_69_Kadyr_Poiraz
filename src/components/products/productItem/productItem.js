import React from 'react';
import './productItem.css';
import AddButton from "./addButton/addButton";

const ProductItem = (
    {img, name, price}
) => {
    return (
        <div style={{background: 'white'}} className='border rounded my-2 p-1 d-flex align-items-center'>
            <img src={img} alt="product img" className='w-25 rounded border'/>
            <div className='ml-4'>
                <h5>{name}</h5>
                <h6 className='font-weight-bolder'>{price} KGS</h6>
            </div>
            <AddButton name={name} price={price} />
        </div>
    );
};

export default ProductItem;