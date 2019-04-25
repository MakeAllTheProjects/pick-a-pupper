// DEPENDENCIES
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

const ActionContext = React.createContext()

class ActionProvider extends Component {
    constructor() {
        super()
        this.state = {
            username: localStorage.getItem("username"),
            isStarted: true,
            breedList: [],
            breedSelection: "",
            currentDogImg: "",
            userRatings: []
        }
    }

    startToggler = () => {
        this.setState(prevState => ({
            isStarted: !prevState.isStarted
        }))
    }

    getAllDogBreeds = async () => {
        await axios.get("https://dog.ceo/api/breeds/list").then(res => {
            this.setState({
                breedList: ["any", ...res.data.message] 
            })
        })
    }

    getBreedData = async (selection) => {
        if(selection === "any" || selection === ""){
            await axios.get("https://dog.ceo/api/breeds/image/random").then(res => {
                this.setState({
                    currentDogImg: res.data.message
                })
            })
        } else {
            await axios.get(`https://dog.ceo/api/breed/${selection}/images/random`).then(res => {
                this.setState({
                    currentDogImg: res.data.message
                })
            })
        }
    }

    storeRating = (rating, selection) => {
        let breed = this.state.currentDogImg
        breed = breed.split("/")
        const newRating = {
            rating: rating,
            img: this.state.currentDogImg,
            breed: breed[4],
            user: localStorage.getItem("username")
        }
        let existingRatings = localStorage.getItem("ratings")
        existingRatings = existingRatings ? JSON.parse(existingRatings) : []
        existingRatings.push(newRating)
        localStorage.setItem("ratings", JSON.stringify(existingRatings))
        this.getBreedData(selection)
    }

    render() {
        return (
            <ActionContext.Provider 
                value={{
                    ...this.state,
                    startToggler: this.startToggler,
                    getAllDogBreeds: this.getAllDogBreeds,
                    selectBreed: this.selectBreed,
                    getBreedData: this.getBreedData,
                    storeRating: this.storeRating
                }}
            >
                {this.props.children}
            </ActionContext.Provider>
        )
    }
}

export default withRouter(ActionProvider)

export const withAction = C => props => (
    <ActionContext.Consumer>
        { value => <C {...props} {...value}/> }
    </ActionContext.Consumer>
)