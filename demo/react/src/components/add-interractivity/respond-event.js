// 响应事件
import React from 'react';

// unit 1
function Button1() {
	return (
		<button>
			不绑定事件的按钮
		</button>
	);
}

// unit 2
function Button2() {
	return (
		<button onClick={() => alert('You clicked me!')}>
			绑定点击事件的按钮
		</button>
	);
}

export default function RespondEvent() {
	return (<>
		<h3>1.响应事件 Responding to Events</h3>
		<section style={{ padding: '0 20px' }}>
			<Button1 />
			<br />
			<Button2 />
		</section>
	</>)
}
