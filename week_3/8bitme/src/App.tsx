import Fun from './pages/Fun';
import Wild from './pages/Wild';
import Projects from './pages/Projects';
import Hub from './pages/Hub';
import Start from './pages/Start';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/hub" element={<Hub />} />
        <Route path='/about' element={<About />} />
        <Route path='/fun' element={<Fun />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/wild' element={<Wild />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;