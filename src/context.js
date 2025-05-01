
import { createContext, useReducer } from "react";
import { reducer } from "./reducer";


export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alert: '',
    currentPage: 1,
    itemsPerPage: 12,
}

export const ContextProvider = ({children}) => {

    const [value, dispatch] = useReducer(reducer, initialState)

    value.addOrder = (item) => {
        dispatch({type: 'ADD_ORDER', payload: item})
    }
    
    value.removeOrder = (itemId) => {
        dispatch({type: 'REMOVE_ORDER', payload: {offerId: itemId}})
    };

    value.incOrder = (itemId) => {
        dispatch({type: 'INC_ORDER', payload: {
            offerId: itemId}})
    };
    value.decOrder = (itemId) => {
        dispatch({type: 'DEC_ORDER', payload: {
            offerId: itemId}})
    };

    value.handleBasketShow = () => {
        dispatch({type: 'TOGGLE_BASKET'})
    }

    value.closeAlert = ()  => {
        dispatch({type: 'CLOSE_ALERT'})
    };

    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    }

    value.paginate = (pageNumber) => {
        dispatch({type: 'PAGINATE', payload: pageNumber})
    }
    value.nextPage = () => {
        dispatch({type: 'NEXT_PAGE'})
    }
    value.prevPage = () => {
        dispatch({type: 'PREV_PAGE'})
    }


    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>

}