// 如何更新 State

import React, { useState } from 'react';

export default function Counter() {
	const [number, setNumber] = useState(0);

	return (
		<>
			<h1>{number}</h1>
			<button onClick={() => {
				// replace update => 直接替换
				setNumber(number + 1); // 0 + 1
				setNumber(number + 1); // 0 + 1
				setNumber(number + 1); // 0 + 1

				// queued update => 在上一次的状态基础之上更新
				setNumber(n => n + 1); // 1 + 1
				setNumber(n => n + 1); // 2 + 1
				setNumber(n => n + 1); // 3 + 1

				// State Updates Queueing
				// setNumber => [1, 1, 1, 2, 3, 4]
			}}>+4</button>
		</>
	)
}
