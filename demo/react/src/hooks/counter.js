import React, { useCallback, useState } from 'react';

// 自定义 Hooks: Counter
export function useCounter() {
	const [count, setCount] = useState(0);

	const handleIncrement = useCallback(() => {
		setCount(count + 1);
	}, [count]);

	const handleDecrement = useCallback(() => {
		setCount(count - 1);
	}, [count]);

	const reset = useCallback(() => {
		setCount(0);
	}, [count]);

	return { count, reset, handleIncrement, handleDecrement }
}
