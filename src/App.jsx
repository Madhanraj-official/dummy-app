import { Button } from "@mui/material";
import { GetAllPost } from "./api/post.js";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BottomNav } from "./ButtomNav.jsx";

export function App() {
	const [post, setPost] = useState([]);
	const nav = useNavigate();
	useEffect(() => {
		GetAllPost().then((d) => {
			if (d.success) {
				setPost(d.data);
			}
		});
	}, []);

	return (
		<>
			{post.map((item) => {
				return (
					<div>
						<Button
							onClick={() => {
								nav(`/post/${item.id}`);
							}}
						>
							<h1>
								{" "}
								{item.id} -- {item.title}
							</h1>
						</Button>
						<p>{item.body}</p>
					</div>
				);
			})}
			<BottomNav />
		</>
	);
}
