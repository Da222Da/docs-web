import React, { useState } from 'react';

const initialItems = [
	{ title: 'pretzels', id: 0 },
	{ title: 'crispy seaweed', id: 1 },
	{ title: 'granola bar', id: 2 },
];

export default function SelectSnack() {
	const [items, setItems] = useState(initialItems);
	const [selectId, setSelectId] = useState(0);

	const selectSnack = items.find(snack => snack.id == selectId);
	function handleInputChange(e, id) {
		setItems(items.map((i) => {
			if (i.id == id) {
				return {
					...i,
					title: e.target.value
				}
			} else {
				return i;
			}
		}))
	}
	return (<>
		<h3>what is your travel snack?</h3>
		<ul>
			{
				items.map(item => (<li key={item.id}>
					<div>
						<input type="text" value={item.title} onChange={e => handleInputChange(e, item.id)} />
						<button onClick={() => { setSelectId(item.id) }}>Choose</button>
					</div>
				</li>))
			}
		</ul>
		<p>you picked {selectSnack.title}</p>
	</>);
}
