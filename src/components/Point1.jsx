import React, { useState } from 'react';

function Point1() {
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);
  const [resultado, setResultado] = useState('');

  const calcularPromedio = () => {
    const promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio <= 3.9) {
      setResultado('Estudie');
    } else {
      setResultado('Becado');
    }
  };

  return (
    <div>
      <h2>Punto 1: Promedio de Notas</h2>
      <div>
        <label>Nota 1: </label>
        <input type="number" value={nota1} onChange={(e) => setNota1(parseFloat(e.target.value))} />
      </div>
      <div>
        <label>Nota 2: </label>
        <input type="number" value={nota2} onChange={(e) => setNota2(parseFloat(e.target.value))} />
      </div>
      <div>
        <label>Nota 3: </label>
        <input type="number" value={nota3} onChange={(e) => setNota3(parseFloat(e.target.value))} />
      </div>
      <button onClick={calcularPromedio}>Calcular</button>
      <div>
        <p>Resultado: {resultado}</p>
      </div>
    </div>
  );
}

export default Point1;
