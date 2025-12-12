import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { RouterConfig } from "./RouterConfig.jsx";
import { store } from "./store/Store.js"
import {Provider} from "react-redux";
createRoot(document.getElementById("root")).render(
	// <StrictMode>
		<Provider store={store}>
			<RouterConfig />,
		</Provider>
	// </StrictMode>,
);
