import React from 'react';

export function Image(props, key="") {
	return (
		<img
			src={props.link}
			alt={props.alt}
			className={props.className || "photo"}
			key={key}
		/>
	)
}

export function ImageList(props) {
	const imageItems = props.datas.map((props, key) => Image(props, key));
	return (
		<section>
			{imageItems}
		</section>
	);
}
