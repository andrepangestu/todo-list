import React, { useContext, useReducer } from "react";

import Store from "./context";
import reducer from "./reducer";

import { usePersistedContext, usePersistedReducer } from "./usePersist";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const globalStore = usePersistedContext(useContext(Store), "state");

  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state" // The localStorage key
  );

  return (
    <Store.Provider value={{ state, dispatch }}>
      <div className="w-full flex-col justify-center items-center">
        <TodoForm />
        <TodoList />
      </div>
    </Store.Provider>
  );
}

export default App;
