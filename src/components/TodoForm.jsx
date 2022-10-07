import React, { useContext, useState } from "react";
import Store from "../context";

export default function TodoForm() {
  const { dispatch } = useContext(Store);
  const [todo, setTodo] = useState("");

  function handleTodoChange(e) {
    setTodo(e.target.value);
  }

  function handleTodoAdd() {
    dispatch({ type: "ADD_TODO", payload: todo });
    setTodo("");
  }

  function handleSubmitForm(event) {
    if (event.keyCode === 13) handleTodoAdd();
  }

  return (
    <form className="w-full flex justify-center item-center mx-4 my-4 text-center">
      <div className="flex flex-wrap">
        <div className="mr-4">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            TODO
          </label>
          <input 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="grid-last-name" 
            type="text"
            value={todo}
            autoFocus={true}
            placeholder="Enter new todo"
            onKeyUp={handleSubmitForm}
            onChange={handleTodoChange}
          />
        </div>
        <div className="md:flex md:items-center mt-6">
          <div className="md:w-2/3">
            <button 
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
              type="button"
              onClick={handleTodoAdd}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
