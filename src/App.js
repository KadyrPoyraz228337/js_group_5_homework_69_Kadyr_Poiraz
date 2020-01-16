import React, {Component} from 'react';
import {Container, Row} from "reactstrap";
import Products from "./components/products/products";
import Cart from "./components/cart/cart";

class App extends Component {

    render() {
        return (
            <Container>
                <div className='pt-2'>
                    <Row>
                        <Products/>
                        <Cart/>
                    </Row>
                </div>
            </Container>
        );
    }
}

export default App;
// export default connect(mapStateToProps())(App);