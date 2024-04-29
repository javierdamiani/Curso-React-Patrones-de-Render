import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {
	return (
		<input
			className="TodoSearch"
			value={searchValue}
			onChange={(event) => {
				setSearchValue(event.target.value);
			}}
			placeholder="Cortar cebolla"
			disabled={loading}
		/>
	);
}

export { TodoSearch };
