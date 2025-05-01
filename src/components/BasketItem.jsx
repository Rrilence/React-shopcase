import { useContext } from "react";
import { ShopContext } from "../context";

function BacketItem(props) {
    const {
        offerId,
        displayName,
        regularPrice,
        quantity,
    } = props;

    const {removeOrder, incOrder, decOrder} = useContext(ShopContext)

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