import React, { useState, useEffect, useCallback } from "react";

export function Count() {
	const [count, setCount] = useState(0);
	const handleCount = useCallback(() => setCount(count + 1), [count]);
	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={handleCount}>Click me</button>
		</div>
	);
}
