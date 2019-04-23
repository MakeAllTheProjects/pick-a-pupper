import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

export const DogContext = React.createContext()

export class DogProvider extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <DogContext.Provider value={{
                ...this.state
            }}>
                {this.props.children}
            </DogContext.Provider>
        )
    }
}

export default withRouter(DogProvider)

export const withDogs = C => props => (
    <DogProvider.Consumer>
        { value => <C {...props} {...value}/> }
    </DogProvider.Consumer>
)
