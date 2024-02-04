import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { populateProduce } from './store/produce';
import App from './App';
import './index.css';

// (a preloadedState does not need to be passed in, it can be undefined).
const store = configureStore();

// Expose the store on the window ONLY in development for testing purposes.
if (import.meta.env.MODE !== "production") {
  window.store = store;
  window.populateProduce = populateProduce;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

