// DEPENDENCIES
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

export const ToggleContext = React.createContext()

export class ToggleProvider extends Component {
    constructor() {
        super()
        this.state = {
            isStarted: true
        }
    }

    startToggler = () => {
        this.setState(prevState => ({
            isStarted: !prevState.isStarted
        }))
    }

    render() {
        return (
            <ToggleContext.Provider value={{
                ...this.state,
                startToggler: this.startToggler
            }}>
                {this.props.children}
            </ToggleContext.Provider>
        )
    }
}

export default withRouter(ToggleProvider)

export const withToggler = C => props => (
    <ToggleContext.Consumer>
        { value => <C {...props} {...value}/> }
    </ToggleContext.Consumer>
)