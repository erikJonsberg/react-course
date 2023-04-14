import React from "react";
import Card from "../card/Card";
import Button from "../button/Button";
import "./Todo.css";

const Todo = () => {
	return (
		<Card>
			<h2>Title</h2>
			<div className='actions'>
				<Button>Delete</Button>
			</div>
		</Card>
	);
};

export default Todo;
