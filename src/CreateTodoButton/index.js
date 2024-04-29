import React from "react";

import "./CreateTodoButton.css";

function CreateTodoButton({ toggleModal }) {
	return <button onClick={toggleModal}>Agregar Todo</button>;
}

export { CreateTodoButton };
