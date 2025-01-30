import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SaudeMental from './components/SaudeMental';
import MitosVerdades from './components/MitosVerdades';
import Contato from './components/Contato';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saude-mental" element={<SaudeMental />} />
          <Route path="/mitos-verdades" element={<MitosVerdades />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;