import './styles.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorldApp } from './HelloWorldApp'
import { NameApp } from './NameApp'
import { CounterApp } from './CounterApp'



ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={ 122 }/>
    </React.StrictMode>
)