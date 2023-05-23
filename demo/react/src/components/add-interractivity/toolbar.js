// 核心 Core
// 如何在 JSX 模板中绑定事件处理器 event handler?

import React from 'react';

function Button1() {
	return (
		<button>
			I don't do anything
		</button>
	);
}

function Button2() {
	function handleClick() {
		alert('You clicked me!')
	}
	return (
		<button onClick={handleClick}>
			click me
		</button >
	);
}

function Button({ onClick, children }) {
	return (
		<button onClick={onClick}>
			{children}
		</button>
	);
}
export default function Toolbar({ onPlayMovie, onUploadImage }) {
	return (
		<>
			<Button1 />
			<br />
			<Button2 />
			<br />
			<Button onClick={onPlayMovie}>
				Play Movie
			</Button>
			<Button onClick={onUploadImage}>
				Upload Image
			</Button>
		</>
	);
}
