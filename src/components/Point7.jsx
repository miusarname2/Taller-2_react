import React, { useState } from 'react';

function Point7() {
  const [nombreArticulo, setNombreArticulo] = useState('');
  const [precioArticulo, setPrecioArticulo] = useState(0);
  const [cantidadComprada, setCantidadComprada] = useState(0);
  const [totalPagar, setTotalPagar] = useState(null);

  const calcularTotalPagar = () => {
    const precio = parseFloat(precioArticulo);
    const cantidad = parseInt(cantidadComprada);

    if (precio >= 0 && cantidad >= 0) {
      const montoTotal = precio * cantidad;
      setTotalPagar(montoTotal);
    } else {
      setTotalPagar(null);
    }
  };

  return (
    <div>
      <h2>Punto 7: Factura de Compra</h2>
      <div>
        <label>Nombre del Artículo: </label>
        <input type="text" value={nombreArticulo} onChange={(e) => setNombreArticulo(e.target.value)} />
      </div>
      <div>
        <label>Precio del Artículo: </label>
        <input type="number" value={precioArticulo} onChange={(e) => setPrecioArticulo(parseFloat(e.target.value))} />
      </div>
      <div>
        <label>Cantidad Comprada: </label>
        <input type="number" value={cantidadComprada} onChange={(e) => setCantidadComprada(parseInt(e.target.value))} />
      </div>
      <button onClick={calcularTotalPagar}>Calcular Total a Pagar</button>
      <div>
        {totalPagar !== null ? (
          <p>Total a Pagar: ${totalPagar}</p>
        ) : (
          <p>Ingrese valores válidos para calcular el total.</p>
        )}
      </div>
    </div>
  );
}

export default Point7;
