import React from 'react';

function Image(props, key = "") {
	return (
		<img
			src={props.src}
			alt={props.alt}
			className={props.className || "photo"}
			key={key}
		/>
	)
}

function ImageList(props) {
	const imageItems = props.datas.map((props, key) => Image(props, key));
	return (
		<section>
			{imageItems}
		</section>
	);
}

export {
	Image,
	ImageList,
}
