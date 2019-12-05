import React from "react"
import { Link } from "@reach/router"
import "./Home.css"

export default function Home ( props ) {
	const [username, setUsername] = React.useState(localStorage.getItem("username") || "")
	const [errorMessage, setErrorMessage] = React.useState("")

	return (
		<main className="home">
			<form
				name="login"
				onSubmit={ e => handleSubmit(e) }
			>
				<h1>Pick a Pupper</h1>
				<p>What's your Name?</p>
				<input
					name="username"
					value={ username }
					onChange={ e => setUsername(e.target.value) }
					required
				/>
				{username
					? (
						<Link to="/doggos">
							<button type="button" name="loginBtn">Start</button>
						</Link>
					) : (
						<button type="button" name="loginBtn">Start</button>
					)
				}
				<p>{errorMessage}</p>
			</form>
		</main>
	)

	function handleSubmit (e) {
		e.preventDefault()
		if (username) {
			localStorage.setItem("username", username)
		} else {
			setErrorMessage("A username is required.")
		}
	}
}