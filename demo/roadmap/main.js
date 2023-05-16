import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./src/app.js"
import "./style/index.css"

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<App />);

