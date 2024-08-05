// Importa os componentes necessários do react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// Importa os componentes de página
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';

function App() {
  return (
    // Envolve a aplicação com o componente Router para habilitar a navegação
    <Router>
      {/* Define uma barra de navegação */}
      <nav>
        <ul>
          <li>
            {/* Link para a página Home */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* Link para a página Empresa */}
            <Link to="/empresa">Empresa</Link>
          </li>
          <li>
            {/* Link para a página Contato */}
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>

      {/* Define as rotas da aplicação */}
      <Routes>
        {/* Rota para a página Home */}
        <Route path="/" element={<Home />} />
        {/* Rota para a página Empresa */}
        <Route path="/empresa" element={<Empresa />} />
        {/* Rota para a página Contato */}
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
