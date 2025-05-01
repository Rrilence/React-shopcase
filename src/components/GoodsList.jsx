import { useContext } from 'react';
import { ShopContext } from '../context';
import {GoodsItem} from './GoodsItem'

function GoodsList() {
    const {goods = [], currentPage, itemsPerPage} = useContext(ShopContext);

    const lastIndexPage = currentPage * itemsPerPage;
    const firstIndexPage = lastIndexPage - itemsPerPage;
    const currentGoods = goods.slice(firstIndexPage, lastIndexPage);

    if (!goods.length) {
        return <h3>Nothing here</h3>
    } 

    return <div className="goods">
        {currentGoods.map(item => (
            <GoodsItem key={item.offerId} {...item}/>
        ))}
    </div>
}

export {GoodsList};