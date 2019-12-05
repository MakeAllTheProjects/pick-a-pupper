import React from "react"
import { Link } from "@reach/router"
import "./Header.css"
import votedForIcon from "../images/voted.png"

export default function Header () {
	return (
		<header className="dogs-header">
			<Link to={localStorage.getItem("username") ? "/doggos" : "/"}>
				<h1>Pick a Pupper</h1>
			</Link>
			<div className="dogs-sub-header">
				<p className="count">
					{
						localStorage.getItem("ratings")
							? JSON.parse(localStorage.getItem("ratings")).length
							: 0
					}
				</p>
				<Link to="/user">
					<img
						alt="award icon"
						src={votedForIcon}
						title="your ratings"
					/>
				</Link>
				<Link to="/about">
					<p>About</p>
				</Link>
				<Link to="/">
					<p
						className="logout"
						onClick={handleLogout}
					>
						Logout
					</p>
				</Link>
			</div>
		</header>
	)

	function handleLogout() {
		localStorage.removeItem('username')
		localStorage.removeItem('ratings')
	}
}