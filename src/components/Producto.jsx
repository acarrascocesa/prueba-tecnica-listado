/* eslint-disable react/prop-types */
const Producto = ({ producto, indice, eliminarProducto, editarProducto }) => {
  return (
    <div className="producto-container">
      <p>Nombre: {producto.nombre}</p>
      <p>Tipo: {producto.tipo}</p>
      <p>Cantidad: {producto.cantidad}</p>
      <button className="editar-button" onClick={() => editarProducto(indice)}>
        Editar
      </button>
      <button
        className="eliminar-button"
        onClick={() => eliminarProducto(indice)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default Producto;
