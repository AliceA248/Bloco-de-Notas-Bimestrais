import React, { useState } from 'react';

export const LancarNotaForm = ({ bimestre, onConfirm, onClose }) => {
  const [materia, setMateria] = useState('');
  const [nota, setNota] = useState('');

  const handleConfirm = () => {
    onConfirm({ bimestre, materia, nota });
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="Overlay">
      <div className="LancarNotaForm">
        <h2>Bimestre {bimestre}</h2>
        <label htmlFor="materia">Matéria:</label>
        <select id="materia" value={materia} onChange={(e) => setMateria(e.target.value)}>
          <option value="biologia">Biologia</option>
          <option value="matematica">Matemática</option>
          <option value="portugues">Português</option>
          <option value="fisica">Física</option>
        </select>
        <label htmlFor="nota">Nota:</label>
        <input type="text" id="nota" value={nota} onChange={(e) => setNota(e.target.value)} />
        <button onClick={handleConfirm} className="confirm-btn">
          Confirmar
        </button>
        <button onClick={handleCancel} className="cancel-btn">
          Cancelar
        </button>
      </div>
    </div>
  );
};
