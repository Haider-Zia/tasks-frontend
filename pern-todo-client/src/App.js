import React from "react";
import InputTodo from "./components/inputTask";
import ListTodos from "./components/listTasks";

function App() {
  return (
    <div className="container">
      <InputTodo />
      <ListTodos />
    </div>
  );
}

export default App;
