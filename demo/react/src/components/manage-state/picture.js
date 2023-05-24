import React, { useState } from 'react';

export default function Picture() {
	const [active, setActive] = useState(true);
	let backgroundClassName = "background";
	let pictureClassName = "picture";
	if (active) {
		backgroundClassName += " background--active"
	} else {
		pictureClassName += " picture--active"
	}
	return (
		<>
			<h3>Demo Picture</h3>
			<div
				className={backgroundClassName}
				onClick={() => setActive(true)}
			>
				<img
					className={pictureClassName}
					alt="Rainbow houses in Kampung Pelangi, Indonesia"
					src="https://i.imgur.com/5qwVYb1.jpeg"
					onClick={(e) => {
						e.stopPropagation();
						setActive(false)
					}}
				/>
			</div>
		</>
	);
}
