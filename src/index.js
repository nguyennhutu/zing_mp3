import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import thunk  from "redux-thunk"
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';



const store= createStore(rootReducer,applyMiddleware(thunk))
const persistor=persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <BrowserRouter>
             <App />
         </BrowserRouter>
      </PersistGate>
   </Provider>
);

reportWebVitals();
