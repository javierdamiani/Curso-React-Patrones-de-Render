import React from "react";
import "./TodoForm.css";

function TodoForm({ toggleModal, addTodo }) {
	const [newTodoValue, setNewTodoValue] = React.useState("");

	const onSubmit = (event) => {
		event.preventDefault();
		addTodo(newTodoValue);
		toggleModal();
	};

	const onChange = (event) => {
		setNewTodoValue(event.target.value);
	};

	return (
		<form onSubmit={onSubmit}>
			<label>Escribe tu nuevo TODO</label>
			<textarea
				placeholder="Cortar cebolla para el almuerzo"
				value={newTodoValue}
				onChange={onChange}
			/>
			<div className="TodoForm-buttonContainer">
				<button
					type="button"
					className="TodoForm-button TodoForm-button--cancel"
					onClick={toggleModal}
				>
					Cancelar
				</button>
				<button
					type="submit"
					className="TodoForm-button TodoForm-button--add"
				>
					Añadir
				</button>
			</div>
		</form>
	);
}

export { TodoForm };
