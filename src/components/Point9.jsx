import React, { useState } from 'react';

function Point9() {
  const [atletas, setAtletas] = useState([]);
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState(0);
  const [campeona, setCampeona] = useState('');
  const [rompioRecord, setRompioRecord] = useState(false);

  const agregarAtleta = () => {
    if (nombre && marca >= 0) {
      const nuevoAtleta = {
        nombre,
        marca,
      };
      setAtletas([...atletas, nuevoAtleta]);
      setNombre('');
      setMarca(0);
    }
  };

  const encontrarCampeona = () => {
    if (atletas.length > 0) {
      let marcaCampeona = -1;
      let nombreCampeona = '';

      atletas.forEach((atleta) => {
        if (atleta.marca > marcaCampeona) {
          marcaCampeona = atleta.marca;
          nombreCampeona = atleta.nombre;
        }
      });

      if (marcaCampeona >= 15.5) {
        setCampeona(nombreCampeona);
        setRompioRecord(true);
      } else {
        setCampeona(nombreCampeona);
        setRompioRecord(false);
      }
    } else {
      alert('No se han registrado atletas.');
    }
  };

  return (
    <div>
      <h2>Punto 9: Atletas Olímpicos</h2>
      <div>
        <label>Nombre del Atleta: </label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>
      <div>
        <label>Marca de Salto (metros): </label>
        <input type="number" value={marca} onChange={(e) => setMarca(parseFloat(e.target.value))} />
      </div>
      <button onClick={agregarAtleta}>Agregar Atleta</button>
      <button onClick={encontrarCampeona}>Encontrar Campeona</button>
      <div>
        <p>Nombre de la Campeona: {campeona !== '' ? campeona : 'No se ha determinado aún'}</p>
        <p>Récord roto: {rompioRecord ? 'Sí' : 'No'}</p>
      </div>
    </div>
  );
}

export default Point9;
