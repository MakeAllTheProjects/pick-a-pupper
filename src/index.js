// DEPENDENCIES
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// CONTEXT
import DogProvider from './context/DogProvider.js'
import ToggleProvider from './context/ToggleProvider.js'

// COMPONENTS
import App from './App.js'

ReactDOM.render(
    <BrowserRouter>
        <DogProvider>
            <ToggleProvider>
                <App/>
            </ToggleProvider>
        </DogProvider>
    </BrowserRouter>,
document.getElementById('root'))
