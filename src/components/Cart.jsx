
function Cart(props) {
    const {quantity = 0, handleBasketShow = Function.prototype} = props;
    return <div className="cart deep-purple darken-3 white-text" onClick={handleBasketShow}>
        <i className="material-icons">shopping_basket</i>
        {quantity ? <span>{quantity}</span> : null}
    </div>

}

export {Cart}