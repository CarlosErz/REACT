import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx';
import { Erro404 } from './404.jsx';
import './404.cc'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <App/>
)
const Error = ReactDOM.createRoot(document.getElementById('Error'));
root.render(
   <Error/>
)