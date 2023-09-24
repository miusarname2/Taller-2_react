import React, { useState } from 'react';

function Point8() {
  const [ladoCuadrado, setLadoCuadrado] = useState(0);
  const [baseRectangulo, setBaseRectangulo] = useState(0);
  const [alturaRectangulo, setAlturaRectangulo] = useState(0);
  const [perimetroCuadrado, setPerimetroCuadrado] = useState(null);
  const [areaRectangulo, setAreaRectangulo] = useState(null);

  const calcularPerimetroCuadrado = () => {
    const lado = parseFloat(ladoCuadrado);

    if (lado >= 0) {
      const perimetro = 4 * lado;
      setPerimetroCuadrado(perimetro);
    } else {
      setPerimetroCuadrado(null);
    }
  };

  const calcularAreaRectangulo = () => {
    const base = parseFloat(baseRectangulo);
    const altura = parseFloat(alturaRectangulo);

    if (base >= 0 && altura >= 0) {
      const area = base * altura;
      setAreaRectangulo(area);
    } else {
      setAreaRectangulo(null);
    }
  };

  return (
    <div>
      <h2>Punto 8: Cuadrado y Rectángulo</h2>
      <div>
        <h3>Cálculo del Perímetro de un Cuadrado</h3>
        <div>
          <label>Lado del Cuadrado: </label>
          <input type="number" value={ladoCuadrado} onChange={(e) => setLadoCuadrado(parseFloat(e.target.value))} />
        </div>
        <button onClick={calcularPerimetroCuadrado}>Calcular Perímetro</button>
        <div>
          {perimetroCuadrado !== null ? (
            <p>Perímetro del Cuadrado: {perimetroCuadrado}</p>
          ) : (
            <p>Ingrese un valor válido para calcular el perímetro del cuadrado.</p>
          )}
        </div>
      </div>
      <div>
        <h3>Cálculo del Área de un Rectángulo</h3>
        <div>
          <label>Base del Rectángulo: </label>
          <input type="number" value={baseRectangulo} onChange={(e) => setBaseRectangulo(parseFloat(e.target.value))} />
        </div>
        <div>
          <label>Altura del Rectángulo: </label>
          <input type="number" value={alturaRectangulo} onChange={(e) => setAlturaRectangulo(parseFloat(e.target.value))} />
        </div>
        <button onClick={calcularAreaRectangulo}>Calcular Área</button>
        <div>
          {areaRectangulo !== null ? (
            <p>Área del Rectángulo: {areaRectangulo}</p>
          ) : (
            <p>Ingrese valores válidos para calcular el área del rectángulo.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Point8;
