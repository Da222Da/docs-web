import React from 'react';
import { useCounter } from "./../hooks/counter"

export function MyComponent() {
	// const [count, setCount] = useState(0);
	// const handleIncrement = useCallback(() => {
	// 	setCount(count + 1);
	// }, [count]);
	// const handleDecrement = useCallback(() => {
	// 	setCount(count - 1);
	// }, [count]);
	// const reset = useCallback(() => {
	// 	setCount(0);
	// }, [count]);
	const { count, handleDecrement, handleIncrement, reset } = useCounter();

	return (<>
		<p>{count}</p>
		<div>
			<button onClick={handleIncrement}>+</button>
			<button onClick={handleDecrement}>-</button>
			<button onClick={reset}>reset</button>
		</div>
	</>);
}
