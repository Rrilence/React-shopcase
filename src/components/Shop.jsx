import { useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../config";

import { ShopContext } from "../context";

import {GoodsList} from "./GoodsList";
import { Preloader } from "./Preloader";
import {Cart} from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";
import { Pagination } from "./Pagination"

function Shop() {
    const {goods, loading, order, isBasketShow, alert, itemsPerPage, currentPage, setGoods} = useContext(ShopContext);


    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        }).then (response => response.json()).then(data => {
            setGoods(data.shop);
        }) //1. параметр fetch- ссылка, 2. - массив опций
        // eslint-disable-next-line
    }, []);

    return <main className="container content">
        <Cart quantity={order.length}/>
        {
           loading ? (<Preloader/>) : (<GoodsList />)
        }
        {isBasketShow && <BasketList/>}
        {alert && <Alert/>}
        {
            <Pagination itemsPerPage={itemsPerPage} currentPage={currentPage} totalItems={goods.length}/>
        }
    </main>
}

export {Shop}