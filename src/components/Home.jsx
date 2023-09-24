import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Menú de Puntos</h1>
      <ul>
        <li><Link to="/point1">Punto 1: Promedio de Notas</Link></li>
        <li><Link to="/point2">Punto 2: Verificar Número</Link></li>
        <li><Link to="/point3">Punto 3: Voltaje de Circuito</Link></li>
        <li><Link to="/point4">Punto 4: Persona con Mayor Edad</Link></li>
        <li><Link to="/point5">Punto 5: Operaciones Matemáticas</Link></li>
        <li><Link to="/point6">Punto 6: Estudiantes</Link></li>
        <li><Link to="/point7">Punto 7: Factura de Compra</Link></li>
        <li><Link to="/point8">Punto 8: Cuadrado y Rectángulo</Link></li>
        <li><Link to="/point9">Punto 9: Atletas Olímpicos</Link></li>
        <li><Link to="/point10">Punto 10: Programa Cíclico</Link></li>
      </ul>
    </div>
  );
}

export default Home;
