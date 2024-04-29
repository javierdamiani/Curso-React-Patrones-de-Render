import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodoLoading } from "../TodoLoading";
import { EmptyTodos } from "../EmptyTodos";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";

function App() {
	const {
		loading,
		error,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		completedTodos,
		totalTodos,
		searchValue,
		setSearchValue,
		toggleModal,
		addTodo,
	} = useTodos();

	return (
		<>
			<TodoHeader loading={loading}>
				<TodoCounter
					totalTodos={totalTodos}
					completedTodos={completedTodos}
				/>
				<TodoSearch
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>
			</TodoHeader>

			<TodoList
				error={error}
				loading={loading}
				searchedTodos={searchedTodos}
				totalTodos={totalTodos}
				searchText={searchValue}
				onError={() => <TodosError />}
				onLoading={() => <TodoLoading />}
				onEmptyTodos={() => <EmptyTodos />}
				onEmptySearchResults={(searchText) => (
					<p>No hay resultados para {searchText} </p>
				)}
				// render={(todo) => (
				// 	<TodoItem
				// 		key={todo.text}
				// 		text={todo.text}
				// 		completed={todo.completed}
				// 		onComplete={() => completeTodo(todo.text)}
				// 		onDelete={() => deleteTodo(todo.text)}
				// 	/>
				// )}
			>
				{(todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				)}
			</TodoList>

			{/* <TodoList>
				{error && <p>Desespérate, hubo un error!!!</p>}
				{!loading && searchedTodos.length === 0 && <p>Crea tu primer TODO!</p>}

				{searchedTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList> */}

			<CreateTodoButton toggleModal={toggleModal} />

			{openModal && (
				<Modal>
					<TodoForm
						toggleModal={toggleModal}
						addTodo={addTodo}
					/>
				</Modal>
			)}
		</>
	);
}

export default App;
