// DEPENDENCIES
import React, { Component } from 'react'

// CONTEXT
import { withToggler } from '../../context/ToggleProvider.js'

// COMPONENTS
import './Login.css'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: ""
        }
    }

    handleChange = e => {
        console.log(e)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        localStorage.setItem("username", this.state.username)
        localStorage.setItem("votes", [])
        this.props.startToggler()
    }

    render(){
        return (
            <section className='login-container'>
                <form name="loginForm" onSubmit={this.handleSubmit}>
                    <h1>Pick a Pupper</h1>
                    <p>What's your name?</p>
                    <input name="username" onChange={this.handleChange}/>
                    <button name="loginBtn">Start</button>
                </form>
            </section>
        )
    }
}

export default withToggler(Login)