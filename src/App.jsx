import React from "react"
import { Router } from "@reach/router"
import "./App.css"
import About from "./pages/about/About"
import Dogs from "./pages/dogs/Dogs"
import Home from "./pages/home/Home"
import NotFound from "./pages/not-found/NotFound"
import User from "./pages/user/User"
import GitHubIcon from "./images/github-icon.svg"

export default function App () {
	return (
		<div className="app">
			<Router>
				<NotFound path="*" />
				<Home path="/" />
				<Dogs path="/doggos" />
				<User path="/user" />
				<About path="/about" />
			</Router>
			<a href="https://github.com/MeghanBomberger/pick-a-pupper/">
				<img
					alt="github repo"
					title="github repo"
					className="github"
					src={GitHubIcon}
				/>
			</a>
		</div>
	)
}