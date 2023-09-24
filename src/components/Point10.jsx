import React, { useState } from 'react';

function Point10() {
  const [datos, setDatos] = useState([]);
  const [datoActual, setDatoActual] = useState(0);
  const [sumatoria, setSumatoria] = useState(0);
  const [promedio, setPromedio] = useState(null);
  const [cantidadValores, setCantidadValores] = useState(0);
  const [mayorValor, setMayorValor] = useState(null);
  const [menorValor, setMenorValor] = useState(null);

  const agregarDato = () => {
    const nuevoDato = parseFloat(datoActual);

    if (isNaN(nuevoDato)) {
      return;
    }

    const nuevosDatos = [...datos, nuevoDato];
    setDatos(nuevosDatos);
    setDatoActual(0);

    const nuevaSumatoria = nuevosDatos.reduce((a, b) => a + b, 0);
    setSumatoria(nuevaSumatoria);

    const nuevaCantidadValores = nuevosDatos.length;
    setCantidadValores(nuevaCantidadValores);

    const nuevoPromedio = nuevaSumatoria / nuevaCantidadValores;
    setPromedio(nuevoPromedio);

    const nuevoMayorValor = Math.max(...nuevosDatos);
    setMayorValor(nuevoMayorValor);

    const nuevoMenorValor = Math.min(...nuevosDatos);
    setMenorValor(nuevoMenorValor);
  };

  return (
    <div>
      <h2>Punto 10: Programa Cíclico</h2>
      <div>
        <label>Ingrese un valor numérico (0 para detener): </label>
        <input
          type="number"
          value={datoActual}
          onChange={(e) => setDatoActual(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={agregarDato}>Agregar Valor</button>
      <div>
        <p>Sumatoria de Valores: {sumatoria}</p>
        <p>Promedio de Valores: {promedio !== null ? promedio : 'N/A'}</p>
        <p>Cantidad de Valores Digitados: {cantidadValores}</p>
        <p>Mayor Valor: {mayorValor !== null ? mayorValor : 'N/A'}</p>
        <p>Menor Valor: {menorValor !== null ? menorValor : 'N/A'}</p>
      </div>
    </div>
  );
}

export default Point10;
