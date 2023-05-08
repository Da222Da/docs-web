import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function MyButton() {
	return (
		<>
			<button>I'm a button1</button>
			<button>I'm a button2</button>
		</>
	);
}

function MyImg() {
	const user = {
		name: "Hedy Lamarr",
		imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
		imageSize: 90,
	};
	return (
		<>
			<h1>{user.name}</h1>
			<img
				className="avatar"
				src={user.imageUrl}
				alt={"Photo of " + user.name}
				style={{
					width: user.imageSize,
					height: user.imageSize,
				}}
			/>
		</>
	);
}

let App = function MyApp() {
	return (
		<div>
			<h1>Welcome to my app</h1>
			<MyButton />
			<MyImg />
		</div>
	);
};

const root = createRoot(document.getElementById("root"));
root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
