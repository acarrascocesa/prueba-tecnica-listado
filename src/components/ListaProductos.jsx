/* eslint-disable react/prop-types */
import { useState } from "react";
import Producto from "./Producto";
import FormularioProducto from "./FormularioProducto";

const ListaProductos = ({ productos, setProductos }) => {
  // Estados para el componente
  const [productoAEditar, setProductoAEditar] = useState(null);
  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroCantidad, setFiltroCantidad] = useState("");

  // Funcion para agregar un nuevo producto
  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  };

  // Funcion para eliminar un producto por el indice
  const eliminarProducto = (indice) => {
    const nuevosProductos = productos.filter((_, index) => index !== indice);
    setProductos(nuevosProductos);
  };

  // Funcion para editar un producto por indice
  const editarProducto = (indice, productoEditado) => {
    const nuevosProductos = productos.map((item, index) =>
      index === indice ? productoEditado : item
    );
    setProductos(nuevosProductos);
    setProductoAEditar(null);
  };

  // Funcion para iniciar la edicion de un producto por indice
  const iniciarEdicion = (indice) => {
    const productoEnEdicion = productos[indice];
    setProductoAEditar({ ...productoEnEdicion, indice });
  };

  // Aplicar filtros para la lista de productos
  const productosFiltrados = productos.filter((producto) => {
    return (
      (filtroTipo ? producto.tipo === filtroTipo : true) &&
      (filtroCantidad ? producto.cantidad <= filtroCantidad : true)
    );
  });

  // Funciones para cambiar los filtros de tipo y cantidad
  const handleFiltroTipoChange = (e) => {
    setFiltroTipo(e.target.value);
  };

  const handleFiltroCantidadChange = (e) => {
    setFiltroCantidad(e.target.value);
  };

  return (
    <div>
      <h2>FILTROS</h2>
      <div className="filtro-container">
        <div className="filtro-item">
          <label>Filtrar por tipo:</label>
          <select
            className="filtro-select"
            onChange={handleFiltroTipoChange}
            value={filtroTipo}
          >
            <option value="">Todos</option>
            <option value="comida">Comida</option>
            <option value="bebida">Bebida</option>
          </select>
        </div>
        <div className="filtro-item">
          <label>Filtrar por cantidad:</label>
          <input
            className="filtro-input"
            type="number"
            onChange={handleFiltroCantidadChange}
            value={filtroCantidad}
          />
        </div>
      </div>
      <h2>FORMULARIO PRODUCTOS</h2>
      <FormularioProducto
        agregarProducto={agregarProducto}
        editarProducto={editarProducto}
        productoAEditar={productoAEditar}
      />

      {/* Lista de productos filtrados */}
      <h2>LISTA DE PRODUCTOS</h2>
      {productosFiltrados.map((producto, index) => (
        <Producto
          key={index}
          indice={index}
          producto={producto}
          eliminarProducto={() => eliminarProducto(index)}
          editarProducto={() => iniciarEdicion(index)}
        />
      ))}
    </div>
  );
};

export default ListaProductos;
