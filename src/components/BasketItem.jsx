
function BacketItem(props) {
    const {
        offerId,
        displayName,
        regularPrice,
        quantity,
        removeOrder = Function.prototype,
        incOrder = Function.prototype,
        decOrder = Function.prototype,
    } = props;

    return <li className="collection-item">
        <div className="basketDescription">
            <span style={{fontSize: "17px"}}>{displayName}</span>
            <span className="price">Цена: {regularPrice}</span>
            <span className="secondary-content" onClick={() => removeOrder(offerId)}><i className="material-icons backet-delete">close</i></span> 
        </div>
        <div className="quantity">
            <i className="material-icons basket-quantity" onClick={() => decOrder(offerId)}>remove</i> {'  '} ({quantity})  {'  '} 
            <i className="material-icons basket-quantity" onClick={() => incOrder(offerId)}>add</i> Стоимость: {regularPrice * quantity} руб. 
        </div>
    </li>

    
}

export {BacketItem}