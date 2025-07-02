import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  let [todos, setTodos] = useState([
    { task: "", id: uuidv4(), isDone: false },
  ]);
  let [newTask, setNewTask] = useState("");
  function addNewTask() {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTask, id: uuidv4(), isDone: false }];
    });
    setNewTask("");
  }

  function updateTodoValue(event) {
    setNewTask(event.target.value);
  }

  function deleteTask(id) {
    let newArr = todos.filter((todo) => todo.id != id);
    setTodos(newArr);
  }

  function updateTasks() {
    let newarr = todos.map((todo) => {
      return {
        ...todo,
        isDone: true,
      };
    });
    setTodos(newarr);
  }
  function unDone() {
    let newarr = todos.map((todo) => {
      return {
        ...todo,
        isDone: false,
      };
    });
    setTodos(newarr);
  }

  function markDone(id) {
    let newMark = todos.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return todo;
      }
    });
    setTodos(newMark);
  }

  return (
    <div>
      <input
        placeholder="enter your task"
        type="text"
        style={{ padding: "12px", borderRadius: "10px" }}
        value={newTask}
        onChange={updateTodoValue}
      ></input>

      <button onClick={addNewTask}>Add</button>
      <br></br>
      <br></br>
      <hr></hr>
      <h4>To do list</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {" "}
              {todo.task} &nbsp;&nbsp;
              <button
                onClick={() => {
                  markDone(todo.id);
                }}
              >
                {todo.isDone ? (
                  <i className="fa-solid fa-square-check"></i>
                ) : (
                  <i className="fa-regular fa-square-check"></i>
                )}
              </button>
              <button
                onClick={() => {
                  deleteTask(todo.id);
                }}
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>

      <br></br>
      <br></br>
      <br></br>
      <button onClick={updateTasks}>Mark All Done</button>
      <br></br>
      <button onClick={unDone}>Mark All UnDone</button>
    </div>
  );
}
