import './App.css';
import Tienda from './componentes/Tienda';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Producto from './componentes/Producto';

function App() {
  return (
    <div className="App">
    <header className="App-header">
    <BrowserRouter>
    <Routes path="/">
        <Route index element={<Tienda />} />
        <Route path="tienda/:page" element={<Tienda />} />
        <Route path="cervezas/:id" element={<Producto />} />
    </Routes>
    </BrowserRouter>
    </header>
</div>
  );
}

export default App;
