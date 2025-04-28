import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";

import {GoodsList} from "./GoodsList";
import { Preloader } from "./Preloader";
import {Cart} from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";
import { Pagination } from "./Pagination"

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alert, setAlert] =useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(12);

    const addOrder = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.offerId === item.offerId); //проверяем добавлен ли товар
        
        if(itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem]) //  не найден, добавляет товар в корзину
        } else {
            const newOrder = order.map((orderItem, index) => {
                if(index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1, // добавляем еще один товар к предыдущему
                    }
                } else {
                    return orderItem;
                }
            })
            setOrder(newOrder);
        }
        setAlert(item.displayName);
    }

    const removeOrder = (itemId) => {
        const newOrder = order.filter(el => el.offerId !== itemId)
        setOrder(newOrder);
    }

    const incOrder = (itemId) => {
        setOrder(() => order.map((el) => {
            if(el.offerId === itemId) {
                return {
                    ...el,
                    quantity: el.quantity + 1,
                }
            } else {
                return el;
            }
        }))
    }

    const decOrder = (itemId) => {
        setOrder(() => order.map((el) => {
            if(el.offerId === itemId) {
                return {
                    ...el,
                    quantity: el.quantity > 0 ? el.quantity - 1 : 0,
                }
            } else {
                return el;
            }
        }))
    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }

    const closeAlert = () => {
        setAlert('');
    }

    const lastIndexPage = currentPage * itemsPerPage;
    const firstIndexPage = lastIndexPage - itemsPerPage;
    const currentGoods = goods.slice(firstIndexPage, lastIndexPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    };
    const nextPage = () => {
        setCurrentPage(prev => prev + 1)
    };

    const prevPage = () => {
        setCurrentPage(prev => prev - 1);
    };


    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        }).then (response => response.json()).then(data => {
            data.shop && setGoods(data.shop);
            setLoading(false);
        }) //1. параметр fetch- ссылка, 2. - массив опций
    }, []);

    return <main className="container content">
        <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
        {
           loading ? (<Preloader/>) : (<GoodsList goods={currentGoods} addOrder={addOrder}/>)
        }
        {
            isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeOrder={removeOrder} incOrder={incOrder} decOrder={decOrder}/>
        }
        {
            alert && <Alert displayName={alert} closeAlert={closeAlert}/>
        }
        {
            <Pagination itemsPerPage={itemsPerPage} totalItems={goods.length} paginate={paginate} prevPage={prevPage} nextPage={nextPage}/>
        }
    </main>
}

export {Shop}