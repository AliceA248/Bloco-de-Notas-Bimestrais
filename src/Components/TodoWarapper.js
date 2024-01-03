import React, { useState } from 'react';
import { LancarNotaForm } from './LancarNota';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';

export const TodoWrapper = () => {
  const [bimestres, setBimestres] = useState(Array.from({ length: 4 }, () => ({ todos: [] })));
  const [showLancarNotaForm, setShowLancarNotaForm] = useState(false);
  const [currentBimestreIndex, setCurrentBimestreIndex] = useState(null);

  const addTodo = (materia, nota, bimestreIndex) => {
    setBimestres((prevBimestres) => {
      const newBimestres = [...prevBimestres];
      newBimestres[bimestreIndex].todos.push({
        id: new Date().getTime(),
        materia,
        nota,
        completed: false,
      });
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

  const handleShowLancarNotaForm = (bimestreIndex) => {
    setCurrentBimestreIndex(bimestreIndex);
    setShowLancarNotaForm(true);
  };

  const handleConfirmNota = ({ materia, nota }) => {
    addTodo(materia, nota, currentBimestreIndex);
    setShowLancarNotaForm(false);
    setCurrentBimestreIndex(null);
  };

  const handleCloseLancarNotaForm = () => {
    setShowLancarNotaForm(false);
    setCurrentBimestreIndex(null);
  };

  const addTodoForm = (bimestreIndex) => {
    setCurrentBimestreIndex(bimestreIndex);
    setShowLancarNotaForm(true);
  };

  return (
    <div className="TodoWrapper">
      <div className="BimestreList">
        {bimestres.map((bimestre, bimestreIndex) => (
          <div key={bimestreIndex} className={`Bimestre Bimestre-${bimestreIndex + 1}`}>
            <div className='Bimestre-Topo'>
              <h1>Bimestre {bimestreIndex + 1}</h1>
              <button onClick={() => addTodoForm(bimestreIndex)} className="todo-btn">
                Lançar Nota
              </button>
            </div>

            <TodoForm addTodo={(materia, nota) => addTodo(materia, nota, bimestreIndex)} />
            <div className="TodoList">
              {bimestre.todos.map((todo, todoIndex) => (
                <div key={todo.id} className={`Todo pink ${todo.completed ? 'completed' : 'incompleted'}`}>
                  <p className='materia'>{todo.materia}</p>
                  <p className='nota'> Nota {todo.nota}</p>
                  <div>
                    <button onClick={() => deleteTodo(bimestreIndex, todoIndex)} className="delete-icon">
                      Excluir
                    </button>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {showLancarNotaForm && (
        <LancarNotaForm bimestre={currentBimestreIndex + 1} onConfirm={handleConfirmNota} onClose={handleCloseLancarNotaForm} />
      )}
    </div>
  );
};
