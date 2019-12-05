import React from "react"
import "./User.css"
import Header from "../../components/Header"

export default function User () {
	const ratings = JSON.parse(localStorage.getItem("ratings")) || []

	console.log(ratings)
	return (
		<>
			<Header />
			<main className="user">
				{ratings.map(rating => {
					return (
						<div className="pupper-picture-container">
							<div
								className="pupper-picture"
								key={rating.img}
								style={{ backgroundImage: `url(${rating.img})` }}
							/>
							<div className="ratings-ribbon">{rating.rating}</div>
						</div>
					)
				})}
			</main>
		</>
	)
}