import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Dash from './assets/Component/Dash';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dash/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
