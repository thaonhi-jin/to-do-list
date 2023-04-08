import React, { useState } from "react";

function AddTodo(props) {
  const [item, setItem] = useState("");
  function handleChange(e) {
    setItem(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.getItem(item);
  }
  return (
    <form method="post" onSubmit={handleSubmit}>
      <input
        type="text"
        name="item"
        value={item}
        onChange={handleChange}
        placeholder="Enter Todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
