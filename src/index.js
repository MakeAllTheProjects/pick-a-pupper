// DEPENDENCIES
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// CONTEXT
import ActionProvider from './context/ActionProvider.js'

// COMPONENTS
import App from './App.js'

ReactDOM.render(
    <BrowserRouter>
        <ActionProvider>
            <App/>
        </ActionProvider>
    </BrowserRouter>,
document.getElementById('root'))
