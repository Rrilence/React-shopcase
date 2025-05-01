export function reducer(state, {type, payload}) {
    switch (type) {
        case 'SET_GOODS': 
        return {
            ...state,
            goods: payload || [],
            loading: false,
        }
        case 'ADD_ORDER': {
            const itemIndex = state.order.findIndex(orderItem => orderItem.offerId === payload.offerId); //проверяем добавлен ли товар
        let newOrder = null;
        if(itemIndex < 0) {
            const newItem = {
                ...payload,
                quantity: 1,
            };
            newOrder = [...state.order, newItem];
        } else {
            newOrder = state.order.map((orderItem, index) => {
                if(index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1, // добавляем еще один товар к предыдущему
                    }
                } else {
                    return orderItem;
                }
            })
        }
        return {
            ...state,
            order: newOrder,
            alert: payload.displayName,
        }
    }
        case 'REMOVE_ORDER':
        return {
            ...state,
            order: state.order.filter((el) => el.offerId !== payload.offerId),
        };
        case 'INC_ORDER':
            return {
                ...state,
                order: state.order.map((el) => {
                    if(el.offerId === payload.offerId) {
                        return {
                            ...el,
                            quantity: el.quantity + 1,
                        }
                    } else {
                        return el;
                    }
                })
            };
        case 'DEC_ORDER':
            return {
                ...state,
                order: state.order.map((el) => {
                    if(el.offerId === payload.offerId) {
                        return {
                            ...el,
                            quantity: el.quantity > 0 ? el.quantity - 1 : 0,
                        }
                    } else {
                        return el;
                    }
                })
            };
        case 'TOGGLE_BASKET': 
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            }
        case 'CLOSE_ALERT':
            return {
                ...state,
                alert: '',
            };
        case 'PAGINATE': {
            return {
                ...state,
                currentPage: payload,
            }
        }
        case 'NEXT_PAGE': {
            return {
                ...state,
                currentPage: state.currentPage + 1,
            }
        }
        case 'PREV_PAGE': {
            return {
                ...state,
                currentPage: state.currentPage - 1,
            }
        }

        default:
            return state;
    }

}