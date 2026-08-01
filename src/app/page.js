"use client";
import { useState } from "react";
 
export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
 
  const handleAdd = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setInputValue("");
  };
 
  const handleRemove = (idToRemove) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== idToRemove));
    if (editingId === idToRemove) {
      setIsEditing(false);
    }
  };
 
  const handleToggleDone = (idToToggle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === idToToggle ? { ...task, completed: !task.completed } : task
      )
    );
  };
 
  const handleStartEdit = (task) => {
    setIsEditing(true);
    setEditingId(task.id);
    setEditingText(task.text);
  };
 
  const handleSaveEdit = (idToSave) => {
    if (editingText.trim() === "") return;
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === idToSave ? { ...task, text: editingText } : task
      )
    );
    setIsEditing(false);
    setEditingText("");
  };
 
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingText("");
  };
 
  return (
    <div style={{ padding: "20px", backgroundColor: "beige", minHeight: "100vh" }}>
      <form onSubmit={handleAdd}>
        <input
          style={{ backgroundColor: "grey", color: "white", padding: "5px" }}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit" style={{ marginLeft: "5px" }}>
          ADD
        </button>
      </form>
      <hr style={{ margin: "20px 0" }} />
      <h2>History</h2>
      {tasks.length === 0 ? (
        <p>.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              {isEditing && editingId === task.id ? (
                <>
                  <input
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                  <button onClick={() => handleSaveEdit(task.id)}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </>
              ) : (
                <>
                  <span
                    style={{
                      textDecoration: task.completed ? "line-through" : "none",
                      color: task.completed ? "gray" : "inherit",
                    }}
                  >
                    {task.text}
                  </span>
                  <button onClick={() => handleToggleDone(task.id)}>
                    {task.completed ? "Undo" : "Done"}
                  </button>
                  <button onClick={() => handleStartEdit(task)}>Edit</button>
                  <button onClick={() => handleRemove(task.id)}>Remove</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
 
 