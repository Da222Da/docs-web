// 描述 UI

import React from "react";
import { Image, ImageList } from "./images.js";
import { Avatar, Profile } from "./avatar";
import { Card } from "./card";
import TodoList from "./todo.js";
import PackingList from "./packing-list";
import List from "./list";


export default function DescribingUI() {
	const imageList = [
		{ src: "https://i.imgur.com/MK3eW3Am.jpg", alt: "Katherine Johnson" },
		{ src: "https://i.imgur.com/QIrZWGIs.jpg", alt: "Alan L. Hart" },
		{ src: "https://i.imgur.com/7vQD0fPs.jpg", alt: "Gregorio Y. Zara" },
	]
	return (
		<>
			<h3 style={{ color: 'red' }}>Hello, React!</h3>
			<Image src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" className="photo" />
			<ImageList datas={imageList} />
			<TodoList />
			<Avatar size={80}
				person={{
					name: 'Aklilu Lemma',
					imageId: 'OKS67lh'
				}} />

			<Profile />
			<Card>
				<h2>Katsuko Saruhashi</h2>
				<Avatar size={80}
					person={{
						name: 'Katsuko Saruhashi',
						imageId: 'YfeOqp2'
					}} />
				<ul>
					<li>
						<b>Profession: </b>
						geochemist
					</li>
					<li>
						<b>Awards: 2 </b>
						(Miyake Prize for geochemistry, Tanaka Prize)
					</li>
					<li>
						<b>Discovered: </b>
						a method for measuring carbon dioxide in seawater
					</li>
				</ul>
			</Card>
			<PackingList />
			<List />
		</>
	);
}

