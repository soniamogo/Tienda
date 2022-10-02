import './App.css';
import Tienda from './componentes/Tienda';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <header className="App-header">
    <BrowserRouter>
    <Routes path="/">
        <Route index element={<Tienda />} />
    </Routes>
    </BrowserRouter>
    </header>
</div>
  );
}

export default App;
