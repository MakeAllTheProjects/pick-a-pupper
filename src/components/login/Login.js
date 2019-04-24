// DEPENDENCIES
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// CONTEXT
import { withAction } from '../../context/ActionProvider.js'

// COMPONENTS
import './Login.css'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(e)
        localStorage.setItem("username", this.state.username)
    }

    render() {
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

export default withAction(Login)