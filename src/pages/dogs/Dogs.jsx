import React from "react"
import axios from "axios"
import "./Dogs.css"
import Header from "../../components/Header"

export default function Dogs () {
	const [showBreedForm, setShowBreedForm] = React.useState(true)
	const [breeds, setBreeds] = React.useState(["any"])
	const [selectedBreed, setSelectedBreed] = React.useState("any")
	const [selectedBreedImage, setSelectedBreedImage] = React.useState("")
	const [rating, setRating] = React.useState(16)

	React.useEffect(() => {
		axios.get("https://dog.ceo/api/breeds/list").then(res => {
			setBreeds([...breeds, ...res.data.message])
		})
	}, [])

	return (
		<>
			<Header />
			<main className="dogs">
				{showBreedForm
					? (
						<form
							className="breed-form"
							name="breedForm"
							onSubmit={(e) => handleSubmitBreed(e)}
						>
							<h2>Hi {localStorage.getItem("username")}!</h2>
							<p>What kind of dog would you like to see?</p>
							<select
								name="breedOptions"
								onChange={e => setSelectedBreed(e.target.value)}
								default="any"
							>
								{breeds.map(breed => {
									return	<option
														key={breed}
														value={breed}
													>
														{breed}
													</option>
								})}
							</select>
							<button>View Dog</button>
						</form>
					) : (
						<>
							<form
								className="rating-form"
								name="ratingForm"
								onSubmit={e => handleSubmitRating(e)}
							>
								<p>On a scale of 10, how would you rate this dog?</p>
								<div className="scale-container">
									<input
										type="range"
										min="10"
										max="16"
										list="tickmarks"
										name="rating"
										value={rating}
										onChange={e => setRating(e.target.value)}
									/>
									<datalist id="tickmarks">
										<option value="16" />
										<option value="15" />
										<option value="14" />
										<option value="13" />
										<option value="12" />
										<option value="11" />
										<option value="10" />
									</datalist>
									<p>{rating}/10</p>
								</div>
								<div className="button-container">
									<button
										className="cancel-button"
										onClick={() => cancel()}
									>
										Pick Another Pupper
									</button>
									<button
										className="submit-button"
										type="submit"
									>
										Rate this dog!
									</button>
								</div>
							</form>
							<div
								className="dog-image"
								style={{ backgroundImage: `url(${selectedBreedImage})` }}
							>
								<div className="belt-hole one" />
								<div className="belt-hole two" />
								<div className="belt-hole three" />
								<div className="belt-line" />
								<div className="chain" />
								<div className="dog-image-label">
									<div className="bone-bump one" />
									<div className="bone-bump two" />
									<p>{selectedBreed === "any" ? "Rando Doggo" : selectedBreed}</p>
									<div className="bone-bump three" />
									<div className="bone-bump four" />
								</div>
							</div>
						</>
					)
				}
			</main>
		</>
	)

	async function handleSubmitBreed (e) {
		e.preventDefault()
		if (selectedBreed === "any" || selectedBreed === "") {
			await axios.get("https://dog.ceo/api/breeds/image/random").then(res => {
				console.log(res.data)
				setSelectedBreedImage(res.data.message)
			})
		} else {
			await axios.get(`https://dog.ceo/api/breed/${selectedBreed}/images/random`).then(res => {
				setSelectedBreedImage(res.data.message)
			})
		}
		setShowBreedForm(!showBreedForm)
	}

	function handleSubmitRating (e) {
		e.preventDefault()

		let breedName = selectedBreedImage
		breedName = breedName.split("/")

		const newRating = {
			rating: rating,
			img: selectedBreedImage,
			breed: breedName[4],
			user: localStorage.getItem("username")
		}

		let existingRatings = localStorage.getItem("ratings")
		existingRatings = existingRatings ? JSON.parse(existingRatings) : []
		existingRatings.push(newRating)
		localStorage.setItem("ratings", JSON.stringify(existingRatings))

		setShowBreedForm(!showBreedForm)
	}

	function cancel () {
		setShowBreedForm(!showBreedForm)
	}
}