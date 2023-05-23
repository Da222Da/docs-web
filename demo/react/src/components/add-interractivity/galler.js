// 核心内容 Core
// 1. 如何添加一个状态变量 state variable
// 2. useState 生命周期函数

import React, { useState } from 'react';
import { sculptureList } from './data/galler.data';

export default function Gallery() {
	const [index, setIndex] = useState(0);
	const [showMore, setShowMore] = useState(false);

	function handleNextClick() {
		setIndex(index + 1);
	}

	function handleMoreClick() {
		setShowMore(!showMore);
	}

	let sculpture = sculptureList[index];
	return (
		<>
			<button onClick={handleNextClick}>
				Next
			</button>
			<h2>
				<i>{sculpture.name} </i>
				by {sculpture.artist}
			</h2>
			<h3>
				({index + 1} of {sculptureList.length})
			</h3>
			<button onClick={handleMoreClick}>
				{showMore ? 'Hide' : 'Show'} details
			</button>
			{showMore && <p>{sculpture.description}</p>}
			<br />
			<img
				src={sculpture.url}
				alt={sculpture.alt}
			/>
		</>
	);
}

