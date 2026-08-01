import { useState } from "react";

export function TaskCard(props) {
  const { task, tasks, setTasks } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(task.value);

  const handleEdit = () => {
    if (isEdit === true) {
      const newTasks = tasks.map((t) => {
        if (t.id === task.id) {
          const newObject = { ...t, value: inputValue };
          return newObject;
        } else {
          return t;
        }
      });
      setTasks(newTasks);
    }
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    const filteredTasks = tasks.filter((value) => value.id !== task.id);
    setTasks(filteredTasks);
  };

  const handleDone = () => {
    const newTasks = tasks.map((t) => {
      if (t.id === task.id) {
        const newObject = { ...t, isDone: !t.isDone };
        return newObject;
      } else {
        return t;
      }
    });
    setTasks(newTasks);
  };

  return (
    <div>
      {isEdit ? (
        <input
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
      ) : (
        <p style={{ textDecoration: task.isDone ? "line-through" : "" }}>
          {task.value}
        </p>
      )}
      {!task.isDone && (
        <button onClick={handleEdit} style={{ backgroundColor: "yellow" }}>
          {isEdit ? "Save" : "Edit"}
        </button>
      )}

      <button onClick={handleDelete} style={{ backgroundColor: "red" }}>
        Delete
      </button>
      <button onClick={handleDone} style={{ backgroundColor: "blue" }}>
        {task.isDone ? "Undo" : "Done"}
      </button>
    </div>
  );
}