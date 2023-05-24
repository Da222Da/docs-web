import React, { useState } from 'react';

export default function Fullname() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const fullname = firstName + " " + lastName
	return (
		<>
			<h3>Demo Fullname</h3>
			<div>
				<label>First name:</label>
				<input type="text" onChange={(e) => setFirstName(e.target.value)} />
			</div>
			<div>
				<label>Last name:</label>
				<input type="text" onChange={(e) => setLastName(e.target.value)} />
			</div>
			<p>your fullname: {fullname} </p>
		</>
	)
}
