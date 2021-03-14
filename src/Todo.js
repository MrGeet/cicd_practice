import React, { useState } from 'react';

const Todo = () => {
	const [input, setInput] = useState('');
	const [items, setItems] = useState([]);
	const [id, setId] = useState(0);

	const addItem = () => {
		if (input.trim() === '') return;

		setId(id + 1);

		const newItem = {
			id: id,
			value: input,
		};
		console.log(newItem);

		const newItems = [newItem, ...items];

		setItems(newItems);

		setInput('');
	};

	const deleteHandler = (id) => {
		const newItems = [...items].filter((item) => item.id !== id);

		setItems(newItems);
	};

	return (
		<div className="container">
			<div>
				<input
					type="text"
					value={input}
					placeholder="Type a to do item"
					name="text"
					onChange={(e) => setInput(e.target.value)}
				/>

				<button onClick={() => addItem()}>Add</button>
			</div>

			<div className="items">
				{items.map((item) => (
					<div className="item" key={item.id}>
						<div>{item.value}</div>
						<div className="button" onClick={() => deleteHandler(item.id)}>
							X
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Todo;
