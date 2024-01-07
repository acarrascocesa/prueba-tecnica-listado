import "./styles.css";
import { useState } from "react";
import ListaProductos from "./components/ListaProductos";

function App() {
  const [productos, setProductos] = useState([]);

  return (
    <div className="App">
      <h1>INVENTARIO DE PRODUCTOS</h1>
      <ListaProductos productos={productos} setProductos={setProductos} />
    </div>
  );
}

export default App;
