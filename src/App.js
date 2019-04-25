// DEPENDENCIES
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// CONTEXT
import { withAction } from './context/ActionProvider.js'

// COMPONENTS
import './index.css'
import Dogs from './components/dogs/Dogs.js'
import Login from './components/login/Login.js'
import UserRatings from './components/user/UserRatings.js'

class App extends Component {
    render(props) {
        return (
            <div className='app-container'>
                <Switch>
                    <Route
                        exact path ="/"
                        render={rProps => localStorage.getItem("username")
                            ? <Redirect push to="/home"/>
                            : <Login/>
                        }
                    />
                    <Route
                        exact path ="/home"
                        render={rProps => !localStorage.getItem("username")
                            ? <Redirect to="/"/>
                            : <Dogs/>
                        }
                    />
                    <Route
                        exact path ="/user"
                        render={rProps => !localStorage.getItem("username")
                            ? <Redirect to="/"/>
                            : <UserRatings/>
                        }
                    />
                </Switch>
            </div>
        )
    }
}

export default withAction(App)