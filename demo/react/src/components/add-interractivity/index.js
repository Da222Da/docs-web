import React from 'react';
import Toolbar from "./toolbar"
import Gallery from "./galler"
import Form from "./form"
import Counter from "./counter"
import List from "./list"

export default function AddInterractivity() {
	return <>
		<Toolbar />

		<br />
		<Counter />
		<br />
		<Gallery />
		<br />
		{/* <Form /> */}
		<br />
		<List />

	</>
}
