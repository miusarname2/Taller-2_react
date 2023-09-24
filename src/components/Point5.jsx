import React, { useState } from 'react';

function Point5() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [suma, setSuma] = useState(null);
  const [resta, setResta] = useState(null);
  const [producto, setProducto] = useState(null);
  const [division, setDivision] = useState(null);

  const calcularOperaciones = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    setSuma(num1 + num2);
    setResta(num1 - num2);
    setProducto(num1 * num2);

    if (num2 !== 0) {
      setDivision(num1 / num2);
    } else {
      setDivision('No se puede dividir por cero');
    }
  };

  return (
    <div>
      <h2>Punto 5: Operaciones Matemáticas</h2>
      <div>
        <label>Ingrese el primer número: </label>
        <input type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
      </div>
      <div>
        <label>Ingrese el segundo número: </label>
        <input type="number" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
      </div>
      <button onClick={calcularOperaciones}>Calcular</button>
      <div>
        <p>Suma: {suma !== null ? suma : ''}</p>
        <p>Resta: {resta !== null ? resta : ''}</p>
        <p>Producto: {producto !== null ? producto : ''}</p>
        <p>División: {division !== null ? division : ''}</p>
      </div>
    </div>
  );
}

export default Point5;
