const ADD_TO_CART = 'cart/ADD_TO_CART';
const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART';

export const addToCart = (itemId) => {
    return {
        type: ADD_TO_CART,
        itemId
    }
};

export const removeFromCart = (itemId) => {
    return {
        type: REMOVE_FROM_CART,
        itemId
    }
}

export const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const { itemId } = action;
            return { ...state, [itemId] : { id: itemId, count: 1 }}
        }
        case REMOVE_FROM_CART: {
            const { itemId } = action;
            const newState = { ...state };
            delete newState[itemId]
            
            return newState
        }
        default: 
            return state;
    }
}