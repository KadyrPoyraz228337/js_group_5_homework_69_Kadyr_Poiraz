import React, {Component} from 'react';
import './products.css';
import {Col} from "reactstrap";
import ProductItem from "./productItem/productItem";
import {connect} from "react-redux";
import {getProducts} from "../../store/actions/products";

class Products extends Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        return this.props.products && (
            <Col xs='12' sm='8'>
                <div className='border rounded bg-light py-2 px-3'>
                    <h3 className='text-center'>Меню</h3>
                    {Object.keys(this.props.products.products).map(podct => {
                        const product = this.props.products.products[podct];
                        return <ProductItem key={podct} name={product.name} price={product.price} img={product.img} />
                    })}
                </div>
            </Col>
        );
    }
}

const mapStateToProps = state => ({
    products: state.productsBlock
});

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);