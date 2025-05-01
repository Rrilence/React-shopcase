import { useContext } from 'react';
import { ShopContext } from '../context';
import { BacketItem } from "./BasketItem";

function BasketList() {
 const {order = [], 
    handleBasketShow = Function.prototype} = useContext(ShopContext);

 const totalPrice = order.reduce((sum, el) => {
    return sum + el.regularPrice * el.quantity
 }, 0)

 return <ul className="collection basket-list ">
    <li className="collection-item active" >Корзина</li>
    {
        order.length ? order.map(item => (
            <BacketItem key = {item.offerId} {...item}/>
        )) : (<li className="collection-item">Корзина пуста</li>)
    }
    <li className="collection-item active">Общая стоимость: {totalPrice} руб.
        <button className="secondary-content btn btn-small indigo lighten-3"> Оформить</button>
    </li>
    <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
</ul>
}

export {BasketList}