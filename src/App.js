// DEPENDENCIES
import React, { Component } from 'react'

// CONTEXT
import { withToggler } from './context/ToggleProvider.js'

// COMPONENTS
import './index.css'
import Login from './components/login/Login.js'
import Dogs from './components/dogs/Dogs.js'

class App extends Component {
    render(props) {
        console.log(this.props.isStarted)
        return (
            <div className='app-container'>
                {this.props.isStarted ? <Dogs/> : <Login/>}
            </div>
        )
    }
}

export default withToggler(App)