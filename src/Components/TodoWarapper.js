import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";

export const TodoWrapper = () => {
  const [bimestres, setBimestres] = useState(Array.from({ length: 4 }, () => ({ todos: [] })));

  const addTodo = (task, bimestreIndex) => {
    setBimestres((prevBimestres) => {
      const newBimestres = [...prevBimestres];
      newBimestres[bimestreIndex].todos.push({ id: new Date().getTime(), task, completed: false });
      return newBimestres;
    });
  };

  const deleteTodo = (bimestreIndex, todoIndex) => {
    setBimestres((prevBimestres) => {
      const newBimestres = [...prevBimestres];
      newBimestres[bimestreIndex].todos.splice(todoIndex, 1);
      return newBimestres;
    });
  };

  const toggleComplete = (bimestreIndex, todoIndex) => {
    setBimestres((prevBimestres) => {
      const newBimestres = [...prevBimestres];
      newBimestres[bimestreIndex].todos[todoIndex].completed = !newBimestres[bimestreIndex].todos[todoIndex].completed;
      return newBimestres;
    });
  };

  return (
    <div className="TodoWrapper">
      <div className="BimestreList">
        {bimestres.map((bimestre, bimestreIndex) => (
          <div key={bimestreIndex} className={`Bimestre Bimestre-${bimestreIndex + 1}`}>
            <h1>Bimestre {bimestreIndex + 1}</h1>
            <TodoForm addTodo={(task) => addTodo(task, bimestreIndex)} />
            <div className="TodoList">
              {bimestre.todos.map((todo, todoIndex) => (
                <Todo
                  key={todo.id}
                  task={todo}
                  deleteTodo={() => deleteTodo(bimestreIndex, todoIndex)}
                  toggleComplete={() => toggleComplete(bimestreIndex, todoIndex)}
                  colorClass={todoIndex % 4 === 0 ? "pink" : todoIndex % 4 === 1 ? "blue" : todoIndex % 4 === 2 ? "orange" : "purple"}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
