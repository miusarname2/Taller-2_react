import React, { useState } from 'react';

function Point3() {
  const [resistencia, setResistencia] = useState(0);
  const [intensidad, setIntensidad] = useState(0);
  const [voltaje, setVoltaje] = useState(null);

  const calcularVoltaje = () => {
    if (resistencia !== 0) {
      const calculatedVoltaje = resistencia * intensidad;
      setVoltaje(calculatedVoltaje);
    } else {
      setVoltaje(null);
    }
  };

  return (
    <div>
      <h2>Punto 3: Cálculo de Voltaje</h2>
      <div>
        <label>Resistencia (ohmios): </label>
        <input type="number" value={resistencia} onChange={(e) => setResistencia(parseFloat(e.target.value))} />
      </div>
      <div>
        <label>Intensidad de Corriente (amperios): </label>
        <input type="number" value={intensidad} onChange={(e) => setIntensidad(parseFloat(e.target.value))} />
      </div>
      <button onClick={calcularVoltaje}>Calcular Voltaje</button>
      <div>
        {voltaje !== null ? (
          <p>El voltaje calculado es {voltaje} voltios</p>
        ) : (
          <p>Ingresa valores válidos para calcular el voltaje.</p>
        )}
      </div>
    </div>
  );
}

export default Point3;
