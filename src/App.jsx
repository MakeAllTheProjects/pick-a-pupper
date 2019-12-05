import React from "react"
import { Router } from "@reach/router"
import "./App.css"
import About from "./pages/about/About"
import Dogs from "./pages/dogs/Dogs"
import Home from "./pages/home/Home"
import NotFound from "./pages/not-found/NotFound"
import User from "./pages/user/User"

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
		</div>
	)
}