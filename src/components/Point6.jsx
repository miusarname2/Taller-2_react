import React, { useState } from 'react';

function Point6() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [nombre, setNombre] = useState('');
  const [sexo, setSexo] = useState('Mujer');
  const [nota, setNota] = useState(0);

  const agregarEstudiante = () => {
    if (nombre && nota >= 0 && nota <= 5) {
      const nuevoEstudiante = {
        nombre,
        sexo,
        nota,
      };
      setEstudiantes([...estudiantes, nuevoEstudiante]);
      setNombre('');
      setSexo('Mujer');
      setNota(0);
    }
  };

  const encontrarMayorMenorNota = () => {
    if (estudiantes.length > 0) {
      let estudianteMayorNota = estudiantes[0];
      let estudianteMenorNota = estudiantes[0];
      let cantidadHombres = 0;
      let cantidadMujeres = 0;

      estudiantes.forEach((estudiante) => {
        if (estudiante.nota > estudianteMayorNota.nota) {
          estudianteMayorNota = estudiante;
        }

        if (estudiante.nota < estudianteMenorNota.nota) {
          estudianteMenorNota = estudiante;
        }

        if (estudiante.sexo === 'Hombre') {
          cantidadHombres++;
        } else {
          cantidadMujeres++;
        }
      });

      alert(`Estudiante con Mayor Nota: ${estudianteMayorNota.nombre} - Nota: ${estudianteMayorNota.nota}`);
      alert(`Estudiante con Menor Nota: ${estudianteMenorNota.nombre} - Nota: ${estudianteMenorNota.nota}`);
      alert(`Cantidad de Hombres: ${cantidadHombres}`);
      alert(`Cantidad de Mujeres: ${cantidadMujeres}`);
    } else {
      alert('No se han registrado estudiantes.');
    }
  };

  return (
    <div>
      <h2>Punto 6: Estudiantes</h2>
      <div>
        <label>Nombre del Estudiante: </label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>
      <div>
        <label>Sexo: </label>
        <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
          <option value="Mujer">Mujer</option>
          <option value="Hombre">Hombre</option>
        </select>
      </div>
      <div>
        <label>Nota: </label>
        <input type="number" value={nota} onChange={(e) => setNota(parseFloat(e.target.value))} />
      </div>
      <button onClick={agregarEstudiante}>Agregar Estudiante</button>
      <button onClick={encontrarMayorMenorNota}>Encontrar Mayor/Menor Nota</button>
    </div>
  );
}

export default Point6;
