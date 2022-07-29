import store from './redux/reduxStore'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StoreContext, {Provider} from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
}


rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})
