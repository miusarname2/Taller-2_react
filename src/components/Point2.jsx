import React, { useState } from 'react';

function Point2() {
  const [numero, setNumero] = useState(0);
  const [resultado, setResultado] = useState('');

  const verificarNumero = () => {
    if (numero % 2 === 0) {
      setResultado('Par');
    } else {
      setResultado('Impar');
    }

    if (numero > 10) {
      setResultado(resultado + ' y Mayor de 10');
    }
  };

  return (
    <div>
      <h2>Punto 2: Verificar Número</h2>
      <div>
        <label>Ingrese un número: </label>
        <input type="number" value={numero} onChange={(e) => setNumero(parseInt(e.target.value))} />
      </div>
      <button onClick={verificarNumero}>Verificar</button>
      <div>
        <p>Resultado: {resultado}</p>
      </div>
    </div>
  );
}

export default Point2;
