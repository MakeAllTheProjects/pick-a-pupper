// DEPENDENCIES
import React, { Component } from 'react'

// COMPONENTS
import './User.css'

// CONTEXT
import { withAction } from '../../context/ActionProvider.js'

class UserRatings extends Component {
    render() {
        return (
            <section className="user-ratings-container">
                UserRatings.js
            </section>
        )
    }
}

export default withAction(UserRatings)
