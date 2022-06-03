import React, { useState } from "react";
import PropTypes from "prop-types";

function EditTodo({ todo }) {
  const [description, setDescription] = useState(todo.description);

  const updateDescription = async () => {
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div
        aria-hidden="true"
        className="modal fade"
        id={`id${todo.todo_id}`}
        // The next line is written so that the description is reset when the user clicks outside the modal to exit it
        onClick={() => {
          setDescription(todo.description);
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add New Description</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {
                  setDescription(todo.description);
                }}
              >
                &times;
              </button>
            </div>

            <div className="modal-body d-flex">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => updateDescription()}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                  setDescription(todo.description);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditTodo;

EditTodo.propTypes = {
  todo: PropTypes.shape({
    todo_id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
