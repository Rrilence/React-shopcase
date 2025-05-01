import { useContext } from 'react';
import { ShopContext } from '../context';

function Cart() {
    const {order, handleBasketShow = Function.prototype} = useContext(ShopContext);

    const quantity = order.length;
    return <div className="cart deep-purple darken-3 white-text" onClick={handleBasketShow}>
        <i className="material-icons">shopping_basket</i>
        {quantity ? <span>{quantity}</span> : null}
    </div>

}

export {Cart}