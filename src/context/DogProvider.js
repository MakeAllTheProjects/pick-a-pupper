// DEPENDENCIES
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

const DogContext = React.createContext()

class DogProvider extends Component {
    constructor() {
        super()
        this.state = {
            breedList: []
        }
    }

    getAllDogBreeds = async () => {
        await axios.get("https://dog.ceo/api/breeds/list").then(res => {
            this.setState({
                breedList: ["any", ...res.data.message]
            })
        })
    }

    render() {
        return (
            <DogContext.Provider 
                value={{
                    ...this.state,
                    getAllDogBreeds: this.getAllDogBreeds
                }}
            >
                {this.props.children}
            </DogContext.Provider>
        )
    }
}

export default withRouter(DogProvider)

export const withDogs = C => props => (
    <DogContext.Consumer>
        {value => <C {...props} {...value}/>}
    </DogContext.Consumer>
)
