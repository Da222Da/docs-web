import React from "react";
import { createRoot } from "react-dom/client";
import { Sandpack } from "@codesandbox/sandpack-react";
import { atomDark } from "@codesandbox/sandpack-themes";


// Render your React component instead
const root = createRoot(document.getElementById("app"));
root.render(<>
	<div style={{ maxWidth: '1200px', minWidth: "676px", margin: "50px auto 0" }} >
		<App />
	</div>
</>);

function App() {
	return <Sandpack
		template="react"
		theme={atomDark}
		files={{
			"/App.js": `import Content from "./content.js";\nexport default function App() { \n\treturn <Content />\n}`,
			"/content.js": {
				code: `export default function Content() { \n\treturn <h1>Hello Sandpack</h1>\n}`,
				action: true, // 设置默认选中
				readOnly: true, // 设置只读
			}
		}}
	/>
}


