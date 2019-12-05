import React from "react"
import "./About.css"
import Header from "../../components/Header"

export default function About () {
	return (
		<>
			<Header />
			<main className="about">
				<h2>About Pick a Pupper</h2>
				<p>This project is based off of the Twitter account <a href="https://twitter.com/dog_rates">WeRateDogs</a></p>
				<p>Checkout the repo on <a href="https://github.com/MeghanBomberger/pick-a-pupper">GitHub</a></p>
			</main>
		</>
	)
}