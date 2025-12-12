import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutPage } from "./components/AboutPage";
import { App } from "./App";
import {Post} from "./Post.jsx";
import { Login } from "./Login.jsx"
import {Counter} from "./Counter.jsx";
export const RouterConfig = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<App />} path="/" />
				<Route element={<AboutPage />} path="/about" />
				<Route element={<Counter/>} path="/counter" />
				<Route element={<Login/>} path="/login" />
				<Route element={<Post/>} path={"/post/:id"}/>
			</Routes>
		</BrowserRouter>
	);
};
