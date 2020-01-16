import React, {Component} from 'react';
import {Button, Col, FormGroup, Input} from "reactstrap";
import {connect} from "react-redux";

import {deleteProductAtTheCart, resetCartStore} from "../../store/actions/cart";
import Modal from "../UI/modal/modal";

import './cart.css'
import {sendRequest} from "../../store/actions/orderActions";

class Cart extends Component {
    state = {
        show: false,
        name: '',
        email: '',
        address: '',
    };

    inputHandler = e => this.setState({[e.target.name]: e.target.value});

    dismiss = () => this.setState({show: false});

    orderHandler = async e => {
      e.preventDefault();

      const order = this.props.cart;
      for(let key in order.elements) delete order.elements[key].price;
      delete order.total;

        const orders = {
            orders: order.elements,
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
        };

        await this.props.sendRequest(orders);
        this.dismiss();
        this.props.resetCartStore();
    };

    render() {
        const size = !this.props.cart ? {height: '100px', background: 'white'} : {background: 'white'};
        const delivery = 150;
        return (
                <Col xs='12' sm='4' className='position-static'>
                    <Modal
                        createOrder={this.orderHandler}
                        title='Введите свои данные'
                        show={this.state.show}
                        dismiss={this.dismiss}
                    >
                            <FormGroup>
                                <Input type="text" name="name" placeholder="Ведитк своё имя" className='mb-2' onChange={this.inputHandler} required />
                                <Input type="email" name="email" placeholder="Введите свою почту" className='mb-2' onChange={this.inputHandler} required />
                                <Input type="text" name="address" placeholder="Введите свой адрес" className='mb-2' onChange={this.inputHandler} required />
                            </FormGroup>
                    </Modal>
                    <div className='border rounded bg-light py-2 px-3' style={{height: '100%'}}>
                        <h3 className='text-center'>Корзина</h3>
                        <div className='border rounded px-2 py-3' style={size}>
                            {!this.props.cart && <h4 className='text-center'>Здесь пока ничего нет</h4>}
                            {this.props.cart && <div>
                                {Object.keys(this.props.cart.elements).map(product => {
                                    // total += this.props.cart[product].price;
                                    return (
                                        <p
                                            title={`Удалить ${product.toLocaleLowerCase()} из карзины`}
                                            className='cart-elem text-dark d-flex my-2 w-100'
                                            key={product}
                                            onClick={() => this.props.deleteProductAtTheCart(product)}
                                        >
                                            {product}
                                            <span className='ml-1'>x{this.props.cart.elements[product].total}</span>
                                            <span className='ml-auto mr-2 font-weight-bolder'>{this.props.cart.elements[product].price}</span>
                                        </p>
                                    )
                                })}
                                <hr/>
                                <p>Доставка: {delivery}</p>
                                <h3>Итого: {this.props.cart.total+delivery}</h3>
                                {this.props.cart && <div>
                                    <hr/>
                                    <Button onClick={() => this.setState({show: true})}>оформить заказ</Button>
                                </div>}
                            </div>}
                        </div>
                    </div>
                </Col>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cartBlock
});

const mapDispatchToProps = dispatch => ({
    deleteProductAtTheCart: name => dispatch(deleteProductAtTheCart(name)),
    resetCartStore: () => dispatch(resetCartStore()),
    sendRequest: order => dispatch(sendRequest(order))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);