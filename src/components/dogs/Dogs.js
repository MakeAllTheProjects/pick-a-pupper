// DEPENDENCIES
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// CONTEXT
import { withAction } from '../../context/ActionProvider.js'

// COMPONENTS
import './Dogs.css'
import votedForIcon from '../images/voted.png'

class Dogs extends Component {
    constructor() {
        super()
        this.state = {
            breedSelection: "",
            rating: 16
        }
    }

    componentDidMount() {
        this.props.getAllDogBreeds()
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogout = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('ratings')
        this.props.startToggler()
    }

    handleSelectBreed = e => {
        e.preventDefault()
        this.props.getBreedData(this.state.breedSelection)
    }

    handleSubmitRating = e => {
        e.preventDefault()
        console.log(e)
        this.props.storeRating(this.state.rating, this.state.breedSelection)
    }

    render(props) {
        return (
            <section className="dogs-container">
                <div className="dogs-header-container">
                    <h1>Pick a Pupper</h1>
                    <Link to="/user">
                        <img alt="dogs you have voted for icon" src={votedForIcon}/>
                    </Link>
                    <p className="logout" onClick={this.handleLogout}>Logout</p>
                </div>
                <form name="breedForm" className="breed-form-container" onSubmit={this.handleSelectBreed}>
                    <h3>Hi {this.props.username}!</h3>
                    <p>What kind of dog would you like to see?</p>
                    <select name="breedSelection" onChange={this.handleChange} default="any">
                        {this.props.breedList.map((breed, i) => {
                            return  <option key={i} value={breed}>
                                        {breed}
                                    </option>
                        })}
                    </select>
                    <button>View Dog</button>
                </form>
                <div className="current-dog-container">
                    {
                        this.props.currentDogImg === ""
                            ?   <div></div>
                            :   <div 
                                    className="dog-image-container" 
                                    style={{backgroundImage: `url(${this.props.currentDogImg})`}}
                                >   
                                    <form className="dog-rating-container" name="dogRating" onSubmit={this.handleSubmitRating}>
                                        <h3>On a scale of 10, how would you rate this dog?</h3>
                                        <input type="range" min="10" max="16" list="tickmarks" name="rating" onChange={this.handleChange}/>
                                        <datalist id="tickmarks">
                                            <option value="16"/>
                                            <option value="15"/>
                                            <option value="14"/>
                                            <option value="13"/>
                                            <option value="12"/>
                                            <option value="11"/>
                                            <option value="10"/>
                                        </datalist>
                                        <p>{this.state.rating}/10</p>
                                        <button>Rate this dog</button>
                                    </form>
                                </div>
                    }
                </div>
            </section>
        )
    }
}

export default withAction(Dogs)