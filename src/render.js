import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {addPost} from './redux/state';

export let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <App state={state} addPost={addPost}/>
    );
}

