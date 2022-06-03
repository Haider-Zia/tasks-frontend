import React, { useState } from "react";

function InputTodo() {
  const [description, setDiscription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setDiscription("");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <h1 className="text-center mt-5">Add Task</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control mr-5"
          value={description}
          onChange={(e) => setDiscription(e.target.value)}
        />
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </>
  );
}

export default InputTodo;
