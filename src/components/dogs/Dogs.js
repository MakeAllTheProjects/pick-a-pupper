// DEPENDENCIES
import React, { Component } from 'react'

// CONTEXT
import { withDogs } from '../../context/DogProvider.js'
import { withToggler } from '../../context/ToggleProvider.js'

// COMPONENTS
import './Dogs.css'
import votedForIcon from '../images/voted.png'
import CurrentDog from './CurrentDog.js'

class Dogs extends Component {
    constructor() {
        super()
        this.state = {
            currentBreed: ""
        }
    }

    componentDidMount() {
        this.props.getAllDogBreeds()
    }

    handleChange = e => {
        console.log(e)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogout = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('votes')
        this.props.startToggler()
    }

    render(props) {
        return (
            <section className="dogs-container">
                <div className="dogs-header-container">
                    <h1>Pick a Pupper</h1>
                    <img alt="dogs you have voted for icon" src={votedForIcon}/>
                    <p className="logout" onClick={this.handleLogout}>Logout</p>
                </div>
                <form name="breedForm" className="breed-form-container">
                    <p>What kind of dog would you like to see?</p>
                    <select name="breedSelection" onChange={this.handleChange}>
                        {this.props.breedList.map((breed, i) => {
                            return  <option key={i} value={breed}>
                                        {breed}
                                    </option>
                        })}
                    </select>
                    <button>View Dog</button>
                    {this.state.currentBreed === "" ? <div></div> : <CurrentDog/>}
                </form>
            </section>
        )
    }
}

export default withToggler(withDogs(Dogs))