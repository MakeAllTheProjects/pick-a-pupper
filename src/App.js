// DEPENDENCIES
import React, { Component } from 'react'

// CONTEXT
import { withAction } from './context/ActionProvider.js'

// COMPONENTS
import './index.css'
import Login from './components/login/Login.js'
import Dogs from './components/dogs/Dogs.js'

class App extends Component {
    render(props) {
        return (
            <div className='app-container'>
                {this.props.isStarted ? <Login/> : <Dogs/>}
            </div>
        )
    }
}

export default withAction(App)