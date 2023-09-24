import React, { useState } from 'react';

function Point4() {
  const [personas, setPersonas] = useState([
    { nombre: '', edad: '' },
    { nombre: '', edad: '' },
    { nombre: '', edad: '' },
  ]);
  const [personaMayor, setPersonaMayor] = useState(null);

  const handleNombreChange = (e, index) => {
    const newPersonas = [...personas];
    newPersonas[index].nombre = e.target.value;
    setPersonas(newPersonas);
  };

  const handleEdadChange = (e, index) => {
    const newPersonas = [...personas];
    newPersonas[index].edad = parseInt(e.target.value);
    setPersonas(newPersonas);
  };

  const encontrarPersonaMayor = () => {
    let mayorEdad = -1;
    let personaMayorIndex = -1;

    personas.forEach((persona, index) => {
      if (persona.edad > mayorEdad) {
        mayorEdad = persona.edad;
        personaMayorIndex = index;
      }
    });

    if (personaMayorIndex !== -1) {
      setPersonaMayor(personas[personaMayorIndex].nombre);
    } else {
      setPersonaMayor('No se ingresaron edades válidas.');
    }
  };

  return (
    <div>
      <h2>Punto 4: Persona con Mayor Edad</h2>
      <div>
        <label>Persona 1 - Nombre: </label>
        <input
          type="text"
          value={personas[0].nombre}
          onChange={(e) => handleNombreChange(e, 0)}
        />
        <label>Edad: </label>
        <input
          type="number"
          value={personas[0].edad}
          onChange={(e) => handleEdadChange(e, 0)}
        />
      </div>
      <div>
        <label>Persona 2 - Nombre: </label>
        <input
          type="text"
          value={personas[1].nombre}
          onChange={(e) => handleNombreChange(e, 1)}
        />
        <label>Edad: </label>
        <input
          type="number"
          value={personas[1].edad}
          onChange={(e) => handleEdadChange(e, 1)}
        />
      </div>
      <div>
        <label>Persona 3 - Nombre: </label>
        <input
          type="text"
          value={personas[2].nombre}
          onChange={(e) => handleNombreChange(e, 2)}
        />
        <label>Edad: </label>
        <input
          type="number"
          value={personas[2].edad}
          onChange={(e) => handleEdadChange(e, 2)}
        />
      </div>
      <button onClick={encontrarPersonaMayor}>Encontrar Persona Mayor</button>
      <div>
        <p>
          Persona con mayor edad: {personaMayor !== null ? personaMayor : ''}
        </p>
      </div>
    </div>
  );
}

export default Point4;
