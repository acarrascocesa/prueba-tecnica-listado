/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const FormularioProducto = ({
  agregarProducto,
  editarProducto,
  productoAEditar,
}) => {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("comida");
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    if (productoAEditar) {
      setNombre(productoAEditar.nombre);
      setTipo(productoAEditar.tipo);
      setCantidad(productoAEditar.cantidad);
    } else {
      setNombre("");
      setTipo("comida");
      setCantidad(0);
    }
  }, [productoAEditar]);

  const handleNombreChange = (e) => setNombre(e.target.value);
  const handleTipoChange = (e) => setTipo(e.target.value);
  const handleCantidadChange = (e) => setCantidad(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const producto = { nombre, tipo, cantidad };

    if (productoAEditar) {
      editarProducto(productoAEditar.indice, producto);
    } else {
      agregarProducto(producto);
    }

    setNombre("");
    setTipo("comida");
    setCantidad(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={handleNombreChange}
        />
      </div>
      <div>
        <label htmlFor="tipo">Tipo:</label>
        <select id="tipo" value={tipo} onChange={handleTipoChange}>
          <option value="comida">Comida</option>
          <option value="bebida">Bebida</option>
        </select>
      </div>
      <div>
        <label htmlFor="cantidad">Cantidad:</label>
        <input
          id="cantidad"
          type="number"
          value={cantidad}
          onChange={handleCantidadChange}
        />
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default FormularioProducto;
