// DEPENDENCIES
import React, { Component } from 'react'

// CONTEXT
import { withDogs } from '../../context/DogProvider.js'
import { withToggler } from '../../context/ToggleProvider.js'

// COMPONENTS
import './Dogs.css'
import votedForIcon from '../images/voted.png'

class Dogs extends Component {

    componentDidMount() {
        this.props.getAllDogBreeds()
    }

    handleLogout = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('votes')
        this.props.startToggler()
    }

    render(props) {
        console.log(this.props.breedList)
        return (
            <section className="dogs-container">
                <div className="dogs-header-container">
                    <h1>Pick a Pupper</h1>
                    <img alt="dogs you have voted for icon" src={votedForIcon}/>
                    <p className="logout" onClick={this.handleLogout}>Logout</p>
                </div>
            </section>
        )
    }
}

export default withToggler(withDogs(Dogs))