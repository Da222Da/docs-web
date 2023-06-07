import React, { useState } from 'react';

export function MyComponent() {
	return (<>
		<ToggleButtonExample />
	</>);
}

function ToggleButtonExample() {
	const [value, setValue] = useState(true);

	return <>
		<h1>Toggle Button</h1>
		<ToggleButton value={value} onButtonChange={(value) => { setValue(value); }} />
	</>
}

function ToggleButton({ value, onButtonChange }) {
	const handleClick = () => {
		onButtonChange(!value);
	}

	return <>
		<button onClick={handleClick}>
			<span>{value ? 'On' : 'Off'}</span>
		</button>
	</>
}
