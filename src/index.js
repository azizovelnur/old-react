import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let posts = [
    {id: 1, message: 'React', likesCount: 1000},
    {id: 2, message: 'Vue', likesCount: 500}
]

let dialogsData = [
    {id: 1, name: 'Artem'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Timur'}
]

let messagesData = [
    {id: 1, messageText: 'Hi'},
    {id: 2, messageText: 'Hello'},
    {id: 3, messageText: 'Wazzup'}
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData}/>
);
