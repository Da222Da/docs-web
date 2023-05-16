import React from 'react';
import { Text } from "./text"
import { Image, ImageList } from "./image"

// 组件的好处
// 1. 可重用
function App() {
	const imageList = [
		{ link: "https://i.imgur.com/MK3eW3Am.jpg", alt: "Katherine Johnson" },
		{ link: "https://i.imgur.com/QIrZWGIs.jpg", alt: "Alan L. Hart" },
		{ link: "https://i.imgur.com/7vQD0fPs.jpg", alt: "Gregorio Y. Zara", className: "photo avatar" },
	]
	return <>
		<h3>
			<Text content="hello, world!"  />
		</h3>
		<Image link="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" className="photo avatar"/>
		<ImageList datas={imageList} />
	</>
}

export default App;
