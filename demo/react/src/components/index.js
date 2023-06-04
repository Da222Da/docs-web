import React, { useState, useRef, useCallback } from 'react';

export function MyComponent() {
	const [time, setTime] = useState(0);
	const timer = useRef(null);

	const handleStart = useCallback(() => {
		timer.current = window.setInterval(() => {
			setTime((time => time + 1), 100)
		})
	}, []);

	const handlePause = useCallback(() => {
		window.clearInterval(timer.current);
		timer.current = null;
	}, []);

	return (<>
		{time} seconds
		<br />
		<button onClick={handleStart}>Start</button>
		<button onClick={handlePause}>Pause</button>
	</>)
}