import React from 'react';

export function Text(props, key="") {
	return (
		<span
			className={props.className || "text"}
			key={key}
            style={{
                backgroundColor: 'black',
                color: 'pink'   
            }}
		>
            {props.content || ''}
        </span>
	)
}

export function TextList(props) {
	const textItems = props.datas.map((props, key) => Image(props, key));
	return (
		<section>
			{textItems}
		</section>
	);
}
