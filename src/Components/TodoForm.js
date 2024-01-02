import React, { useState } from 'react';
import { LancarNotaForm } from './LancarNota';

export const TodoForm = ({ addTodo }) => {
  const [showLancarNotaForm, setShowLancarNotaForm] = useState(false);

  const handleShowLancarNotaForm = () => {
    setShowLancarNotaForm(true);
  };

  const handleConfirmNota = ({ bimestre, materia, nota }) => {
    addTodo(`${materia} - ${nota}`);
    setShowLancarNotaForm(false);
  };

  const handleCloseLancarNotaForm = () => {
    setShowLancarNotaForm(false);
  };

  return (
    <div className='Titulo'>
      {showLancarNotaForm && (
        <LancarNotaForm bimestre={1} onConfirm={handleConfirmNota} onClose={handleCloseLancarNotaForm} />
      )}
    </div>
  );
};
