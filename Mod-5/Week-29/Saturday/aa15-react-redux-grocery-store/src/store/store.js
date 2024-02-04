import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import produceReducer from './produce';
import { cartReducer } from './cart';

// createStore - creates a Redux store
// combineReducers - creates one reducer from multiple reducers as slices of state
// applyMiddleware - a store enhancer that will allow you to attach middlewares (a middleware is a function called before any action hits the root reducer)
// compose - another store enhancer that will allow you to use more than one store enhancer

// rootReducer which will be the root reducer for the Redux store. The rootReducer will just be the return of combineReducers invoked with an empty object for now.
const rootReducer = combineReducers({
    produce: produceReducer,
    cart: cartReducer
  });


let enhancer;

if (import.meta.env.MODE !== "production") {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })
      : compose;
  enhancer = composeEnhancers(applyMiddleware(logger));
}


const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer)
};

export default configureStore;
